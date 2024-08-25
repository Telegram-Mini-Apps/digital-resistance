import classNames from 'classnames'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Placeholder } from './Placeholder'

import styles from './styles.module.scss';

import { useApplicationContext } from '../../../dataSource/ApplicationContext';
import { ProgressiveImage } from '../../../uilib/ProgressiveImage/ProgressiveImage';

export const Screenshots = () => {
    const {
        application,
        isLoading,
    } = useApplicationContext();

    if (isLoading) {
        return (<Placeholder/>);
    }

    if (!application?.attributes.screenshots?.data || application?.attributes.screenshots?.data?.length === 0) {
        return null
    }

    return (
        <div className={styles.root}>
            <Swiper
                freeMode
                mousewheel
                slidesPerView={"auto"}
                className={styles.slider}
                spaceBetween={10}
            >
                <SwiperSlide className={classNames(styles.shadowBlock)}>&nbsp;</SwiperSlide>
                {
                    application?.attributes.screenshots?.data?.map((screenshot, index) => {
                        const isLastSlide = application?.attributes.screenshots?.data?.length === index + 1;

                        return (
                            <SwiperSlide
                                key={screenshot.attributes.url}
                                className={classNames(isLastSlide ? styles.expandedWidth : styles.slide)}
                            >
                                <ProgressiveImage
                                    className={styles.image}
                                    src={screenshot?.attributes.url}
                                    alt={screenshot?.attributes.name}
                                    width={screenshot?.attributes.width}
                                    height={screenshot?.attributes.height}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
