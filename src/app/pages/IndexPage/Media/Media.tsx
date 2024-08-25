import React from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '../Section/Section';

import styles from './Media.module.scss';

export function Media() {
    const { t } = useTranslation();

    return (
        <Section title={t('the_situation_in_media')}>

        </Section>
    );
}