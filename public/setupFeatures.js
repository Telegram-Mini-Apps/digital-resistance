(function (window) {
    const ECOSYSTEM_KEY_NAME = 'ecosystem';
    const TG_WEB_APP_START_PARAM = 'tgWebAppStartParam';

    try {
        const ecosystem = getEcoStartAppParam();

        if (ecosystem !== null) {
            window.ecosystem = ecosystem;
        }

        const initData = window.Telegram.Utils.urlParseQueryString(window.Telegram.WebApp.initData);
        const parsedInitData = JSON.parse(initData.user);

        getItemFromStorage('recentlyLaunched')
            .then((data) => {
                if (!Boolean(data)) {
                    fetch('/api/applications/recentlyLaunched', {
                        method: 'POST',
                        body: JSON.stringify({ telegram_user_data: parsedInitData }),
                        headers: {
                            'Content-Type': 'application/json',
                            'x-init-data': window.Telegram.WebApp.initData,
                        },
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res?.data?.history.length > 0) {
                                return setItemToStorage("recentlyLaunched", "exists");
                            }
                        })
                        .catch((res) => {
                            console.log(res);
                        });
                } else {
                    window.isRecentlyLaunchedExists = true;
                    updateCssProps("recently_launched_height", "132px");
                    updateCssProps("initial_recently_launched_height", "132px");
                }
            })
    } catch (e) {
        console.log(e)
    }

    function updateCssProps(key, value) {
        document.documentElement.style.setProperty("--".concat(key), value);
    }

    function getItemFromStorage(key) {
        return new Promise((resolve, reject) => {
            window.Telegram.WebApp.CloudStorage.getItem(
                key,
                (err, data) => {
                    if (!err) {
                        resolve(data);
                    } else {
                        reject(err);
                    }
                })
        }).catch()
    }

    function setItemToStorage(key, value) {
        return new Promise((resolve, reject) => {
            window.Telegram.WebApp.CloudStorage.setItem(key, value, (err, data) => {
                if (!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        }).catch()
    }

    function getEcoStartAppParam() {
        const VALID_ECO_KEYS = ['ton'];
        const searchParams = new URLSearchParams(window.location.search);

        if (searchParams.has(TG_WEB_APP_START_PARAM)) {
            const tgWebAppStartParam = searchParams.get(TG_WEB_APP_START_PARAM);

            if (tgWebAppStartParam) {
                const params = tgWebAppStartParam.split('-');
                const section = getAttributeFromSearch(params, ECOSYSTEM_KEY_NAME);

                if (section !== null && VALID_ECO_KEYS.includes(section)) {
                    return section;
                }
            }
        }
    }

    function getAttributeFromSearch(params, key) {
        let attribute = null

        params.forEach((param) => {
            if (attribute !== null) {
                return
            }

            const [paramKey, values] = param.split('_')

            if (paramKey === key) {
                attribute = values
            }
        })

        return attribute
    }
})(window);
