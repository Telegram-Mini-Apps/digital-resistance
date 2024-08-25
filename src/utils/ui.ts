// refs: https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript

import isMobile from './isMobile';

export function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

let scrollBarWidth: number = 0;
export const checkScrollbarWidth = () => {
  if (isMobile(navigator).any) {
    return;
  }

  document.documentElement.style.setProperty('--scrollbar-width', `0px`);

  if (!scrollBarWidth) {
    scrollBarWidth = getScrollbarWidth();
  }

  if (document.body.clientWidth === window?.innerWidth) {
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarWidth}px`);
  }
};

/**
 * Hides the application loader.
 */
export async function hideLoader(): Promise<void> {
  const loader = document.querySelector<HTMLDivElement>('.appLoader');
  return loader
    ? loader
      .animate([
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 300 })
      .finished
      .then(() => {
        console.log(123);
        loader.remove();
      })
    : undefined;
}
