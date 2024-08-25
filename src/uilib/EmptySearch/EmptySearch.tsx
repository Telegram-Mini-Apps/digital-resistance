import classNames from 'classnames';
import Lottie from 'lottie-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Body, Heading } from '../Typography/Typography';
import styles from './styles.module.scss';
import duck from './duck.json';

interface IEmptySearchProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string,
    withoutDescription?: boolean,
}

export const EmptySearch: React.FC<IEmptySearchProps> = (props) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.root, props.className)}>
            <div className={styles.lottieContainer}>
                <Lottie animationData={duck}/>
            </div>
            {!props.withoutDescription && (
                <div className={styles.typography}>
                    <Heading type={"h3"} weight={"semi-bold"}>
                        {t("noResults")}
                    </Heading>
                    <Body weight={'regular'}>
                        {t("emptySearch", {"request": props.value})}
                        <br />
                        {t("newSearch")}
                    </Body>
                </div>
            )}
        </div>
    )
}
