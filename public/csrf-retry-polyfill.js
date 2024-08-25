const originalFetch = window.fetch || global.fetch;
const domainWhitelist = [window.location.origin];
const urlWhitelist = [];

let csrfRevalidationPromise = null;
let isCsrfRevalidating = false;
let pausedFetches = [];

async function revalidateCsrfToken() {
    const initData = window.Telegram.Utils.urlParseQueryString(window.Telegram.WebApp.initData);
    const parsedInitData = JSON.parse(initData.user);

    const response = await originalFetch('/api/revalidate-csrf', {
        method: 'POST',
        body: JSON.stringify({ telegram_user_data: parsedInitData }),
        headers: {
            'Content-Type': 'application/json',
            'x-init-data': window.Telegram.WebApp.initData
        }
    });

    if (response.ok) {
        console.info('CSRF token revalidated successfully.');
        return true;
    }

    console.error('CSRF token revalidation failed.');
    return false;
}

async function fetchWithCsrfRetry(input, init = {}) {
    const requestUrl = typeof input === 'string'
        ? new URL(input, window.location.origin)
        : new URL(input.url);

    const isWhitelisted = domainWhitelist.includes(requestUrl.origin) || urlWhitelist.includes(requestUrl.href);

    if (!isWhitelisted) {
        return originalFetch(input, init);
    }

    if (isCsrfRevalidating) {
        await csrfRevalidationPromise;
    }

    for (let attempt = 1; attempt <= 2; attempt++) {
        try {
            const response = await originalFetch(input, init);

            if (response.status === 429) {
                if (!isCsrfRevalidating) {
                    isCsrfRevalidating = true;

                    csrfRevalidationPromise = revalidateCsrfToken().finally(() => {
                        isCsrfRevalidating = false;

                        const paused = pausedFetches.slice();

                        pausedFetches = [];
                        paused.forEach(({ resolve, reject, input, init }) => {
                            fetchWithCsrfRetry(input, init).then(resolve).catch(reject);
                        });
                    });
                }

                return new Promise((resolve, reject) => {
                    pausedFetches.push({ resolve, reject, input, init });
                });
            }

            if (response.ok) {
                return response;
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }

        } catch (e) {
            if (attempt >= 2) {
                console.error('An error occurred:', e);
                throw e;
            }
            console.warn(`Request failed. Retrying... (Attempt ${attempt} of 2)`);
        }
    }
}

window.fetch = fetchWithCsrfRetry;
