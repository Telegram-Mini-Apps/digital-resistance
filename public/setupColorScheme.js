const isTMA = window.tapps.bridge.isTMA;
const postEvent = window.tapps.bridge.postEvent;

if (isTMA('simple')) {
  try {
    const color = '#1A2026';
    postEvent('web_app_set_header_color', { color });
    postEvent('web_app_set_background_color', { color });
    postEvent('web_app_expand');
    postEvent('web_app_ready');
  } catch (e) {
    console.error('Error while setting up scheme:', e);
  }
}