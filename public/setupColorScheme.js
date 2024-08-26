(function setupColorScheme(window) {
  const color = '#1A2026';

  window.Telegram.WebApp.setHeaderColor(color);
  window.Telegram.WebApp.setBackgroundColor(color);

  window.Telegram.WebApp.expand();
  window.Telegram.WebApp.ready();
})(window);
