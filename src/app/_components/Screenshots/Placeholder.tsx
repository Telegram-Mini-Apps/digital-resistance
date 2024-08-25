import classNames from 'classnames';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProgressiveImage } from '../../../uilib/ProgressiveImage/ProgressiveImage';
import { MOCK_SCREENSHOTS } from '../../../utils/mocks/screenshots';
import styles from './styles.module.scss';

export const Placeholder = () => {
  return (
    <div className={styles.root}>
      <Swiper
        freeMode
        mousewheel
        slidesPerView={'auto'}
        className={styles.slider}
        spaceBetween={10}
      >
        <SwiperSlide className={classNames(styles.shadowBlock)}>&nbsp;</SwiperSlide>
        {
          MOCK_SCREENSHOTS.map((screenshot, index) => {
            return (
              <SwiperSlide
                key={index}
                className={styles.image}
              >
                <ProgressiveImage
                  className={classNames(styles.image, styles.shine)}
                  alt={screenshot.attributes.name}
                  width={screenshot.attributes.width}
                  height={screenshot.attributes.height}
                />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};
