import { LinkSection } from './LinkSection';
import { StoriesSection } from './StoriesSection';
import { CommunitySection } from './CommunitySection';
import { TwitterSection } from './TwitterSection';
import { SupporterBadgeSection } from './SupporterBadgeSection';

import styles from './Share.module.scss';

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.999 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19m-.531-4.684a.75.75 0 0 0 1.06 0l3.429-3.428a.75.75 0 0 0-1.06-1.061l-2.149 2.148v-6.76a.75.75 0 1 0-1.5 0v6.76L9.1 12.327a.75.75 0 1 0-1.06 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LittleDogeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20.253 16.645c-.176-.887-.284-1.618-.838-5.635-.908-6.58-6.984-12.59-11.608-5.186-1.583 2.534-2.18 5.35-2.786 8.198q-.129.612-.262 1.223c-.17.783-.252 1.752-.058 2.038.37.543 1.009.96 1.666 1.39.236.154.473.309.702.472.897.641 3.038 1.833 4.367 2.518 1.154.594 2.362-.057 2.985-.393a6 6 0 0 1 .24-.125c.537-.255 3.976-1.914 5.092-2.631.864-.556.674-1.233.55-1.67q-.032-.11-.05-.199m-4.872 2.121c-.974 1.27-1.99 1.479-2.892 1.414-2.281-.165-3.774-3.476-4.364-5.315-.84-2.314.05-2.925.425-3.182q.054-.037.092-.066c.28-.221 1.239-.445 2.052.222.806.661 1.14.786 1.795.773.54-.011 1.419-.482 1.976-.781.179-.096.325-.174.416-.214.544-.237 1.408-.279 2.164.516.714.753.513 2.023.184 3.219-.35 1.275-.873 2.144-1.848 3.414m-.845-.557c.29-.48.45-1.12.33-1.751-.29-1.532-3.293-1.57-4.154-.68-.666.69-.282 2.091.325 2.672.928.887 2.776.954 3.499-.24"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Share() {
  // const onSaveStoriesImageClick = useCallback(() => {
  //   // FIXME: set normal link
  //   const l = document.createElement('a');
  //   l.download = 'test.png';
  //   l.href = '/img/dr/@1x.png';
  //   l.click();
  // }, []);
  //
  // const onSaveAvatarClick = useCallback(() => {
  //   console.log('will save avatar');
  // }, []);
  //
  // const onSaveDRImageClick = useCallback(() => {
  //   console.log('onSaveDRImageClick');
  // }, []);

  const displayAppUrl = 't.me/tgresistancebot/letter';
  const appUrl = `https://${displayAppUrl}`;

  return (
    <>
      <hr className={styles.separator}/>
      <SupporterBadgeSection/>
      <LinkSection displayAppUrl={displayAppUrl} appUrl={appUrl}/>
      <TwitterSection/>
      <StoriesSection appUrl={appUrl}/>
      <CommunitySection/>
      {/*<Section className={styles.section} title={t('add_badge')}>*/}
      {/*  <p className={styles.sectionTextWithImage}>*/}
      {/*    <Trans i18nKey="add_badge_description"/>*/}
      {/*    <span className={styles.avatarImageWrapper}>*/}
      {/*      <img*/}
      {/*        className={styles.avatarImage}*/}
      {/*        alt="user-avatar"*/}
      {/*        src={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}*/}
      {/*      />*/}
      {/*      <span className={styles.avatarImageDogeWrapper}>*/}
      {/*        <DogeIcon className={styles.avatarImageDoge} bgColor="#fff"/>*/}
      {/*      </span>*/}
      {/*    </span>*/}
      {/*  </p>*/}
      {/*  <div className={styles.actions}>*/}
      {/*    <Button icon={<DownloadIcon/>} onClick={onSaveAvatarClick}>*/}
      {/*      <Trans i18nKey="save_dog_avatar"/>*/}
      {/*    </Button>*/}
      {/*    <Button variant="secondary" icon={<LittleDogeIcon/>} onClick={onSaveDRImageClick}>*/}
      {/*      <Trans i18nKey="save_dog_avatar_image"/>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/*</Section>*/}
    </>
  );
}