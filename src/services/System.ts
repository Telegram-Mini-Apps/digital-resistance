import { Storage } from './Storage';

const RENDERER_DELAY = 400;

class System {
  constructor() {
  }

  get storage() {
    return this._storage;
  }

  public delayAction(action: Function, delay: number = RENDERER_DELAY) {
    if (window.Telegram.WebApp.platform === 'android' || window.Telegram.WebApp.platform === 'tdesktop') {
      setTimeout(action, delay);
      return;
    }

    action();
  }

  public preloadImage(url: string, callback?: (loaded: boolean) => void) {
    const img = new Image();
    img.onload = () => callback && callback(true);
    img.onerror = () => callback && callback(false);
    img.src = url;
  }

  public preloadImages(urls: string[], callback?: (loaded: boolean) => void) {
    let loadedCount = 0;
    const totalImages = urls.length;

    const checkAllImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        callback && callback(true);
      }
    };

    urls.forEach(url => {
      const img = new Image();
      img.onload = checkAllImagesLoaded;
      img.onerror = () => callback && callback(false);
      img.src = url;
    });
  }

  private _storage: Storage = new Storage();
}

const system = new System();

export default system;
