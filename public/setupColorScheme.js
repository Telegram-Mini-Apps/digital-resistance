(function setupColorScheme(window) {
    try {
        setupTheme();
        setupPlatform();
        Telegram.WebApp.onEvent('themeChanged', setupTheme);
    } catch (e) {
        console.log('Error during init app', e)
    }

    function setupTheme() {
        const themeData = window.Telegram.WebApp.themeParams;

        setupLinkAlphaColor(themeData);
        setupCSSPropsFromThemeData('bg_color', themeData);
        setupCSSPropsFromThemeData('button_color', themeData);
        setupCSSPropsFromThemeData('button_text_color', themeData);
        setupCSSPropsFromThemeData('hint_color', themeData);
        setupCSSPropsFromThemeData('link_color', themeData);
        setupCSSPropsFromThemeData('secondary_bg_color', themeData);
        setupCSSPropsFromThemeData('text_color', themeData);
        setupCSSPropsFromThemeData('section_bg_color', themeData);
        setupCSSPropsFromThemeData('accent_text_color', themeData);
        setupCSSPropsFromThemeData('subtitle_text_color', themeData);
        setupCSSPropsFromThemeData('destructive_text_color', themeData);
        setupCSSPropsFromThemeData('header_bg_color', themeData);
        setupCSSPropsFromThemeData('section_header_text_color', themeData);

        window.Telegram.WebApp.setHeaderColor(themeData.section_bg_color)
        window.Telegram.WebApp.setBackgroundColor(themeData.section_bg_color)

        // fallback for stackedTMA support
        if (window.Telegram.WebApp.platform === 'ios' || window.Telegram.WebApp.platform === 'tdesktop') {
            updateCssProps('link_color', themeData.accent_text_color);
            updateCssProps('bg_color', themeData.section_bg_color);
        }
    }

    function setupLinkAlphaColor(themeData) {
        const key = 'link_color';
        const prevValue = getCssProp(key);
        const nextValue = themeData[key] || prevValue;

        nextValue && document.documentElement.style.setProperty("--link_alpha_color", nextValue + "1A");
    }

    function setupCSSPropsFromThemeData(key, themeData) {
        const prevValue = getCssProp(key);
        const nextValue = themeData[key] || prevValue;

        document.documentElement.style.setProperty("--".concat(key), nextValue);
    }

    function setupPlatform() {
        const platform = window.Telegram.WebApp.platform;
        // TODO: Dimitree – revert after proper client side fix solution
        document.documentElement.style.setProperty("--app_platform", platform);

        if (platform === 'android' || platform === 'tdesktop') {
            document.documentElement.style.setProperty('--header_height', `64px`);
            document.documentElement.style.setProperty('--initial_header_height', `64px`);
        }
    }

    function updateCssProps(key, value) {
        document.documentElement.style.setProperty("--".concat(key), value);
    }

    function getCssProp(key) {
        return document.documentElement.style.getPropertyValue("--".concat(key));
    }
})(window)
