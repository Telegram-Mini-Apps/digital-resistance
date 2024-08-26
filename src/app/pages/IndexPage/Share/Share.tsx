import { Trans, useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Section } from '../Section/Section';

import styles from './Share.module.scss';
import { useCallback } from 'react';
import { Button } from '../Button/Button';

function CopyIcon(props: { className?: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.8 7.6V3.978q.078.048.148.107c.032.027.065.06.193.188l4.586 4.586c.129.128.16.161.188.193q.06.07.107.148H18.4c-.433 0-.71 0-.92-.018-.2-.016-.269-.044-.298-.058a.7.7 0 0 1-.306-.306c-.015-.029-.042-.097-.058-.298-.017-.21-.018-.487-.018-.92m5.4 9.2v-6h-3.83c-.395 0-.737 0-1.02-.023-.3-.025-.602-.079-.894-.228a2.3 2.3 0 0 1-1.005-1.005c-.15-.292-.203-.594-.228-.894a13 13 0 0 1-.023-1.02V3.8h-2c-.573 0-.955 0-1.248.025-.284.023-.415.064-.497.106a1.2 1.2 0 0 0-.524.524c-.042.083-.083.213-.106.497-.024.293-.025.675-.025 1.248v1h.226c.143 0 .259 0 .373.01a2.8 2.8 0 0 1 1.585.656c.087.074.169.156.27.257l.019.018 4.586 4.586.018.018c.101.102.183.184.257.27a2.8 2.8 0 0 1 .657 1.586c.009.114.009.23.009.373V19.2h1c.573 0 .955 0 1.248-.025.284-.023.414-.064.497-.106a1.2 1.2 0 0 0 .524-.524c.042-.083.083-.213.106-.497.024-.293.025-.675.025-1.248m-3.4 4h1.032c.533 0 .98 0 1.347-.03.383-.031.747-.1 1.092-.275a2.8 2.8 0 0 0 1.224-1.224c.176-.345.244-.71.275-1.092.03-.366.03-.814.03-1.347V9.974c0-.143 0-.259-.01-.373a2.8 2.8 0 0 0-.656-1.585 5 5 0 0 0-.257-.27l-.018-.019-4.586-4.586-.018-.018a5 5 0 0 0-.271-.257 2.8 2.8 0 0 0-1.585-.657c-.114-.009-.23-.009-.373-.009h-2.858c-.533 0-.98 0-1.347.03-.383.031-.747.1-1.092.275A2.8 2.8 0 0 0 9.505 3.73c-.176.345-.244.71-.275 1.092-.03.367-.03.814-.03 1.347V7.2H8.168c-.533 0-.98 0-1.347.03-.383.031-.747.1-1.092.275A2.8 2.8 0 0 0 4.505 8.73c-.176.345-.244.71-.275 1.092-.03.367-.03.814-.03 1.347v10.664c0 .533 0 .98.03 1.347.031.383.1.747.275 1.092a2.8 2.8 0 0 0 1.224 1.224c.345.176.71.244 1.092.275.366.03.814.03 1.347.03h6.664c.533 0 .98 0 1.347-.03.383-.031.747-.1 1.092-.275a2.8 2.8 0 0 0 1.224-1.224c.176-.345.244-.71.275-1.092.03-.366.03-.814.03-1.347V20.8m-7-8.2V8.978q.078.048.148.107c.032.027.065.06.193.188l4.586 4.586c.129.128.16.161.188.193q.06.07.107.148H13.4c-.433 0-.71 0-.92-.018-.2-.016-.269-.044-.298-.058a.7.7 0 0 1-.306-.306c-.014-.029-.042-.097-.058-.298-.017-.21-.018-.487-.018-.92m1.6 3.2h3.8v6c0 .573 0 .955-.025 1.249-.023.284-.064.413-.106.496a1.2 1.2 0 0 1-.524.524c-.083.042-.213.083-.497.106-.293.024-.675.025-1.248.025H8.2c-.573 0-.955 0-1.248-.025-.285-.023-.415-.064-.497-.106a1.2 1.2 0 0 1-.524-.524c-.042-.083-.083-.213-.106-.497-.024-.293-.025-.675-.025-1.248V11.2c0-.573 0-.955.025-1.248.023-.284.064-.414.106-.497a1.2 1.2 0 0 1 .524-.524c.082-.042.212-.083.497-.106C7.245 8.8 7.627 8.8 8.2 8.8h2v3.83c0 .394 0 .737.023 1.02.024.3.079.602.228.894a2.3 2.3 0 0 0 1.005 1.005c.292.15.594.203.894.228.283.023.626.023 1.02.023z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StoriesImage(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="86"
      height="106"
      fill="none"
    >
      <g filter="url(#a)">
        <rect
          width="63"
          height="84"
          x="16.063"
          y="5.938"
          fill="#212A33"
          rx="8"
          transform="rotate(6 16.063 5.938)"
        />
        <rect
          width="62.5"
          height="83.5"
          x="16.285"
          y="6.212"
          stroke="#8794A1"
          strokeOpacity=".11"
          strokeWidth=".5"
          rx="7.75"
          transform="rotate(6 16.285 6.212)"
        />
        <path
          fill="#8794A1"
          fillRule="evenodd"
          d="M28.571 48.689c-.393 1.493-1.93 6.191-2.649 8.354-.532 1.612-.918 3.636-.571 4.28.66 1.227 1.912 2.247 3.202 3.298.462.376.928.756 1.374 1.151 1.749 1.549 5.996 4.535 8.644 6.271 2.3 1.508 4.989.404 6.376-.166.21-.086.39-.16.534-.21 1.189-.42 8.802-3.152 11.311-4.417 1.944-.98 1.693-2.449 1.53-3.397-.027-.16-.051-.304-.063-.429-.174-1.908-.24-3.472-.517-12.06-.238-7.343-.864-8.694-1.781-10.67-.155-.334-.32-.687-.49-1.09-1.184-2.781-5.61-6.499-7.318-7.785-1.71-1.287-3.564-1.787-6.605-.207-2.85 1.482-5.692 4.634-7.117 6.256-1.425 1.62-5.368 8.954-5.86 10.82m7.601 16.17c-1.604-2.207-2.717-6.167-3.072-7.871-1.258-5.064.753-6.153 1.6-6.612q.123-.065.208-.118c.64-.404 2.885-.821 4.275.921 1.247 1.564 2.077 1.726 3.228 1.95l.383.077c.934.193 3.241-.75 4.533-1.277.314-.128.567-.232.727-.289.817-.292 2.912-.01 4.445 1.566 1.443 1.485.608 4.01-.178 6.384l-.145.439c-.753 2.295-2.317 4.325-4.651 6.785s-4.52 2.675-6.407 2.337c-1.95-.348-2.94-1.534-4.946-4.292m2.27.327c.707.833 2.358 1.837 3.649 1.806.831-.02 2.812-.266 3.777-1.538.718-.948 1.195-2.263 1.083-3.618-.083-1.013-1.3-2.49-2.913-2.768l-.273-.048c-1.638-.286-4.19-.733-5.418.466-.76.742-.846 1.71-.906 2.383l-.021.222c-.035.747.04 1.936 1.022 3.095"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="87.435"
          height="106.125"
          x="-.717"
          y="-.063"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_16_1718"/>
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_1718" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
}

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

function DogeIcon({ bgColor, ...rest }: {
  className?: string;
  bgColor: string;
  width?: number;
}) {
  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 19 24"
    >
      <path
        fill="currentColor"
        d="M1.894 10.863c-.127.824-.687 3.435-.951 4.638-.195.896-.288 2.005-.066 2.332.575.844 1.717 1.423 2.71 2.132 1.028.733 3.478 2.098 4.999 2.881s3.123-.323 3.691-.593c.616-.291 4.552-2.19 5.828-3.011 1.156-.743.664-1.676.573-2.139-.201-1.015-.325-1.852-.96-6.45-.634-4.6-1.091-4.764-1.884-6.191s-3.38-3.175-4.371-3.77c-.992-.594-2.016-.758-3.56.262-1.448.957-2.797 2.812-3.471 3.764-.674.951-2.38 5.114-2.538 6.145"
      />
      <path
        fill={bgColor}
        d="M6.892 19.122c-.987-1.095-1.809-3.16-2.096-4.056-1.054-2.903.27-3.464.592-3.718.32-.253 1.504-.604 2.349.254.84.852 1.307.81 2.054.884.638.064 2.316-.935 2.738-1.138s1.564-.17 2.477.59c.912.761.51 2.297.211 3.685-.274 1.275-1 2.454-2.115 3.908s-2.278 1.692-3.311 1.618c-1.068-.078-1.666-.659-2.9-2.027"
      />
      <path
        fill="currentColor"
        d="M10.192 19.933c-.691.09-1.636-.356-2.062-.764-.594-.567-.701-1.202-.724-1.605 0-.362-.058-.96.351-1.453.626-.754 2.151-.603 3.034-.545.882.057 1.62.783 1.721 1.322a2.9 2.9 0 0 1-.378 2.005c-.446.738-1.496.983-1.942 1.04"
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

function PlaneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#fff"
        d="M3.582 11.77q7.594-3.306 10.126-4.36c4.824-2.007 5.825-2.355 6.479-2.367.143-.002.464.033.672.202.174.143.223.335.247.47.022.136.052.444.028.684-.26 2.746-1.392 9.409-1.967 12.484-.242 1.302-.722 1.738-1.186 1.78-1.01.093-1.775-.666-2.751-1.306-1.528-1.002-2.39-1.625-3.875-2.603-1.715-1.13-.602-1.75.375-2.766.255-.265 4.699-4.307 4.783-4.673.01-.046.022-.217-.081-.307-.1-.09-.25-.06-.359-.035q-.229.052-7.325 4.841-1.037.714-1.883.696c-.619-.013-1.813-.35-2.7-.639-1.085-.353-1.95-.54-1.875-1.14q.058-.47 1.292-.96"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#fff"
        d="M12.542 2.323c-5.49 0-9.956 4.302-9.958 9.59a9.3 9.3 0 0 0 1.329 4.795L2.5 21.678l5.28-1.334a10.25 10.25 0 0 0 4.758 1.168c5.264 0 9.96-4.216 9.962-9.591.001-2.562-1.034-4.973-2.914-6.785s-4.38-2.813-7.044-2.813m-.003 17.569c-1.622 0-3.12-.488-4.516-1.284l-3.132.79.836-2.941c-.898-1.376-1.463-2.881-1.462-4.544.001-4.396 3.715-7.97 8.28-7.97 2.21 0 4.289.83 5.852 2.337 1.563 1.506 2.423 3.51 2.422 5.64-.002 4.468-3.905 7.972-8.28 7.972m4.543-5.971c-.25-.12-1.472-.7-1.7-.78-.229-.08-.394-.121-.56.119-.165.24-.643.78-.787.94-.146.16-.291.179-.54.06-.25-.12-1.051-.374-2-1.19-.74-.635-1.24-1.42-1.385-1.66s-.016-.37.109-.489c.111-.106.249-.28.373-.42.123-.14.165-.24.249-.4.082-.158.04-.3-.022-.418-.062-.121-.559-1.3-.767-1.78-.202-.467-.407-.404-.56-.412-.145-.006-.31-.008-.477-.008a.93.93 0 0 0-.663.3c-.228.24-.871.819-.871 1.998s.891 2.32 1.016 2.48c.124.159 1.755 2.58 4.25 3.619.594.246 1.058.393 1.42.504.596.183 1.138.157 1.566.095.478-.069 1.473-.579 1.68-1.138.207-.56.207-1.04.145-1.14-.06-.1-.227-.16-.476-.28"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#fff"
        d="M17.217 3.865h2.76l-6.03 6.892 7.094 9.378h-5.555l-4.35-5.688-4.978 5.688H3.396l6.45-7.372L3.04 3.866h5.695l3.932 5.199zm-.97 14.618h1.53L7.905 5.43H6.264z"
      />
    </svg>
  );
}

export function Share() {
  const { t } = useTranslation();
  const appUrl = 'https://t.me/tgresistancebot/letter';

  const onCopyClick = useCallback(() => {
    // TODO: Motion, reaction?
    navigator
      .clipboard
      .writeText(appUrl)
      .catch(console.error);
  }, [appUrl]);

  const onShareStoryClick = useCallback(() => {
    console.log('will share story');
  }, []);

  const onShareTelegramClick = useCallback(() => {
    window.Telegram.WebApp.openTelegramLink(`https://t.me/share/url?${
      new URLSearchParams([
        ['url', appUrl],
        [
          'text',
          'We demand the release of Pavel Durov from custody in France. Support Pavel and sign the petition',
        ],
      ])
        .toString()
        // By default, URL search params encode spaces with "+".
        // We are replacing them with "%20", because plus symbols are working incorrectly
        // in Telegram.
        .replace(/\+/g, '%20')
    }`);
  }, [appUrl]);

  const onShareXClick = useCallback(() => {
    window.Telegram.WebApp.openLink(
      'https://x.com/intent/post?text=We+demand+the+release+of+Pavel+Durov+from+custody+in+France.+Support+Pavel+and+sign+the+petition&url=https%3A%2F%2Ft.me%2Ffree%2Fletter',
    );
  }, []);

  const onShareWhatsAppClick = useCallback(() => {
    window.Telegram.WebApp.openLink(
      'https://wa.me/?text=We+demand+the+release+of+Pavel+Durov+from+custody+in+France.+Support+Pavel+and+sign+the+petition https%3A%2F%2Ft.me%2Ffree%2Fletter',
    );
  }, []);

  const onSaveStoriesImageClick = useCallback(() => {
    // FIXME: set normal link
    const l = document.createElement('a');
    l.download = 'test.png';
    l.href = '/img/dr/@1x.png';
    l.click();
  }, []);

  const onSaveAvatarClick = useCallback(() => {
    console.log('will save avatar');
  }, []);

  const onSaveDRImageClick = useCallback(() => {
    console.log('onSaveDRImageClick');
  }, []);

  return (
    <>
      <hr className={styles.separator}/>
      <Section className={styles.section} title={t('share_letter_link')}>
        <p><Trans i18nKey="share_description"/></p>
        <div className={styles.actions}>
          <Button
            className={styles.action}
            variant="secondary"
            after={<CopyIcon className={styles.copyIcon}/>}
            onClick={onCopyClick}
          >
            {appUrl}
          </Button>
          <div className={cn(styles.action, styles.actionsRow)}>
            <Button onClick={onShareTelegramClick} icon={<PlaneIcon/>}>
              <Trans i18nKey="share"/>
            </Button>
            <Button
              className={styles.shareAction}
              variant="secondary"
              onClick={onShareWhatsAppClick}
              icon={<WhatsAppIcon/>}
            />
            <Button
              className={styles.shareAction}
              variant="secondary"
              onClick={onShareXClick}
              icon={<XIcon/>}
            />
          </div>
        </div>
      </Section>
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
          <Button
            className={styles.action}
            variant="secondary"
            icon={<DownloadIcon/>}
            onClick={onSaveStoriesImageClick}
          >
            <Trans i18nKey="save_stories_img"/>
          </Button>
        </div>
      </Section>
      <Section className={styles.section} title={t('add_badge')}>
        <p className={styles.sectionTextWithImage}>
          <Trans i18nKey="add_badge_description"/>
          <span className={styles.avatarImageWrapper}>
            <img
              className={styles.avatarImage}
              alt="user-avatar"
              src={window.Telegram.WebApp.initDataUnsafe.user?.photo_url}
            />
            <span className={styles.avatarImageDogeWrapper}>
              <DogeIcon className={styles.avatarImageDoge} bgColor="#fff"/>
            </span>
          </span>
        </p>
        <div className={styles.actions}>
          <Button icon={<DownloadIcon/>} onClick={onSaveAvatarClick}>
            <Trans i18nKey="save_dog_avatar"/>
          </Button>
          <Button variant="secondary" icon={<LittleDogeIcon/>} onClick={onSaveDRImageClick}>
            <Trans i18nKey="save_dog_avatar_image"/>
          </Button>
        </div>
      </Section>
    </>
  );
}