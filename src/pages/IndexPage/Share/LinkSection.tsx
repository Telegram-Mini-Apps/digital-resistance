import { Trans, useTranslation } from 'react-i18next';
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import mixpanel from 'mixpanel-browser';
import { hapticFeedbackNotificationOccurred, openLink, shareURL } from '@telegram-apps/sdk-react';

import { Section } from '../Section/Section';
import { Button } from '../../../components/Button/Button';
import { Toast } from '../Toast/Toast';
import { copyTextToClipboard } from '../../../utils/clipboard';

import styles from './Share.module.scss';

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

export function LinkSection({ displayAppUrl, appUrl }: {
  displayAppUrl: string;
  appUrl: string;
}) {
  const { t } = useTranslation();
  const [toastText, setToastText] = useState<string | undefined>();

  const onCopyClick = useCallback(() => {
    copyTextToClipboard(appUrl).then((copied) => {
      if (copied) {
        hapticFeedbackNotificationOccurred('success');
        setToastText(t('letter_app_link_copied'));
      } else {
        hapticFeedbackNotificationOccurred('error');
        setToastText(t('letter_app_link_copy_error'));
      }
    });
  }, [appUrl, t]);

  const onShareTelegramClick = useCallback(() => {
    shareURL(appUrl, t('we_demand_release'));
    mixpanel.track('telegram_link_shared');
  }, [appUrl, t]);

  const onShareWhatsAppClick = useCallback(() => {
    openLink(
      `https://wa.me/?${new URLSearchParams([
        ['text', `${t('we_demand_release')} ${appUrl}`],
      ]).toString()}`,
    );
    mixpanel.track('whatsapp_shared');
  }, [appUrl, t]);

  useEffect(() => {
    if (toastText) {
      const timeoutId = setTimeout(() => {
        setToastText(undefined);
      }, 2000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toastText]);

  return (
    <Section className={styles.section} title={t('share_letter_link')}>
      <p><Trans i18nKey="share_description"/></p>
      <div className={styles.actions}>
        <Button
          className={styles.action}
          variant="secondary"
          after={<CopyIcon className={styles.copyIcon}/>}
          onClick={onCopyClick}
        >
          {displayAppUrl}
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
        </div>
      </div>
      <AnimatePresence>
        {toastText && <Toast>{toastText}</Toast>}
      </AnimatePresence>
    </Section>
  );
}