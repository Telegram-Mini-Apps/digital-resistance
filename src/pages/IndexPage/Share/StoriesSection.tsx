import cn from 'classnames';
import { Trans, useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import mixpanel from 'mixpanel-browser';
import { shareStory } from '@telegram-apps/sdk-react';

import { Button } from '../../../components/Button/Button';
import { Section } from '../Section/Section';
import { DogeIcon } from './DogeIcon';

import styles from './Share.module.scss';

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0m9.5-5.036a.75.75 0 0 1 .75.75v3.536h3.536a.75.75 0 0 1 0 1.5H13.25v3.536a.75.75 0 1 1-1.5 0V12.75H8.215a.75.75 0 0 1 0-1.5h3.535V7.714a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function StoriesSection({ appUrl }: { appUrl: string }) {
  const { t } = useTranslation();
  const onShareStoryClick = useCallback(() => {
    shareStory(
      new URL('/img/story.png', window.location.href).toString(),
      {
        text: `${appUrl} #FREEDUROV`,
        widgetLink: {
          url: appUrl,
          name: 'Sign The Open Letter',
        },
      },
    );
    mixpanel.track('telegram_stories_shared');
  }, [appUrl]);

  return (
    <Section
      className={cn(styles.section, styles.sectionStories)}
      title={t('publish_to_stories')}
    >
      <p className={styles.sectionTextWithImage}>
        <Trans i18nKey="share_stories_description"/>
        <span className={styles.storiesImageWrapper}>
          <DogeIcon className={styles.storiesImage} bgColor="#212A33"/>
        </span>
      </p>
      <div className={styles.actions}>
        <Button className={styles.action} icon={<PlusIcon/>} onClick={onShareStoryClick}>
          <Trans i18nKey="share_tg_stories"/>
        </Button>
        {/*<Button*/}
        {/*  className={styles.action}*/}
        {/*  variant="secondary"*/}
        {/*  icon={<DownloadIcon/>}*/}
        {/*  onClick={onSaveStoriesImageClick}*/}
        {/*>*/}
        {/*  <Trans i18nKey="save_stories_img"/>*/}
        {/*</Button>*/}
      </div>
    </Section>
  );
}