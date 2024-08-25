(function (window) {
    try {
        window.Telegram.WebApp.expand();
        window.Telegram.WebApp.ready();

        // Initialize Telegram Analytics SDK
        window.telegramAnalytics.init({
            token: 'eyJhcHBfbmFtZSI6IlRhcHBzQ2VudGVyIiwiYXBwX3VybCI6Imh0dHBzOi8vdGFwcHNjZW50ZXIub3JnLyIsImFwcF9kb21haW4iOiJodHRwczovL3RhcHBzY2VudGVyLm9yZy8ifQ==!PlQ1VPVphIctWCwVBvU3cirOzbMEOYpgfPMgntcq2sM=',
            appName: 'TappsCenter',
        });
    } catch (e) {
        console.log(e)
    }
})(window)
