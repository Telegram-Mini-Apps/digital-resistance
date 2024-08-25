import classNames from 'classnames';
import React, { HTMLAttributes, useEffect, useLayoutEffect, useState } from 'react'
import styles from './styles.module.scss';

interface IProgressiveImageProps extends HTMLAttributes<HTMLImageElement> {
    src?: string;
    width?: number;
    height?: number;
    alt: string;
}

const imagesCache = new Map<string, string>();

export const ProgressiveImage: React.FC<IProgressiveImageProps> = (props) => {
    const {
        src,
        width,
        height,
        alt,
        className
    } = props;

    return (
        <div
            className={className}
            onContextMenu={(e) => {
                e.preventDefault();

                return false;
            }}
        >
            {src && (
                <img
                    src={src}
                    alt={alt}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        return false;
                    }}
                    width={width}
                    height={height}
                    className={classNames(
                        styles.border,
                        styles.preventSelect,
                        className,
                    )}
                />
            )}
        </div>
    )
}
