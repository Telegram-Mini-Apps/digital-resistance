import React, { useEffect, useState } from 'react';
import { TelegramWebApps } from '../../../types/common';
import { useDebounce } from '../../hooks/useDebounce';
import styles from './styles.module.scss';

const useRipple = <T extends HTMLElement>(ref: React.RefObject<T>, platform: TelegramWebApps.Platform) => {
    const [
        ripples,
        setRipples,
    ] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        if (platform === 'android' || platform === 'tdesktop') {
            if (ref.current) {
                const elem = ref.current;

                const clickHandler = (e: MouseEvent) => {
                    let rect = elem.getBoundingClientRect();
                    let left = e.clientX - rect.left;
                    let top = e.clientY - rect.top;
                    const height = elem.clientHeight;
                    const width = elem.clientWidth;
                    const diameter = Math.max(width, height);

                    setRipples([
                        ...ripples,
                        {
                            top: top - diameter / 2,
                            left: left - diameter / 2,
                            height: Math.max(width, height),
                            width: Math.max(width, height),
                        },
                    ]);
                };

                elem.addEventListener("mousedown", clickHandler);

                return () => {
                    elem.removeEventListener("mousedown", clickHandler);
                };
            }
        }
    }, [ref, ripples, platform]);

    const _debounced = useDebounce(ripples, 1000);

    useEffect(() => {
        if (_debounced.length) {
            setRipples([]);
        }
    }, [_debounced.length]);

    return ripples?.map((style, i) => {
        return (
            <span
                key={i}
                className={styles.rippleElement}
                style={{
                    ...style,

                }}
            />
        );
    });
};

export default useRipple;
