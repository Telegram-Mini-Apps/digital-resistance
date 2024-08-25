import { telegramUtils } from '../services/utils'

export function isWindows() {
    if (typeof window === 'undefined') return false;
    if (typeof navigator === 'undefined') return false;

    return navigator?.platform.indexOf('Win') > -1
}

const noop = () => {};

export const requestTimeout = (fn: Function, delay: number, registerCancel: Function) => {
    const start = new Date().getTime();

    const loop = () => {
        const delta = new Date().getTime() - start;

        if (delta >= delay) {
            fn();
            registerCancel(noop);
            return;
        }

        const raf = requestAnimationFrame(loop);
        registerCancel(() => cancelAnimationFrame(raf));
    };

    const raf = requestAnimationFrame(loop);
    registerCancel(() => cancelAnimationFrame(raf));
};

// refs: https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
export const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout | null;

    return function executedFunction(...args: any[]) {
        const later = () => {
            timeout = null;

            func(...args);
        };

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
};

let throttleTimer:boolean;

export const throttle = (callback: Function, time: number) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}

export const preloadScript = (src: string) => {
    const preloadedScript = document.createElement("script");
    preloadedScript.src= src;

    document.head.appendChild(preloadedScript);

    return new Promise((resolve, reject) => {
        preloadedScript.onload = resolve;
        preloadedScript.onerror = reject;
    })
}

export function openTelegramLink(link?: string) {
    if (!link) {
        return;
    }

    try {
        if (link.startsWith('https://t.me')) {
            telegramUtils.openTelegramLink(link);

            return;
        }
    } catch (e) {
    }

    telegramUtils.openTelegramLink(link);
}

export function getAttributeFromSearch(params: Array<string>, key: string) {
    let attribute: string | null = null

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
