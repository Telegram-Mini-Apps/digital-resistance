import React, { useCallback, useEffect, useState } from 'react';
import { Trans } from 'react-i18next';
import useSWR from 'swr';

import { Section } from '../Section/Section';
import { Button } from '../Button/Button';

import styles from './Sign.module.scss';

function SignIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="none">
      <path
        fill="currentColor"
        d="M8.659 23.039q-1.261 0-1.918-.714-.647-.705-.647-1.868 0-.989.506-2.133.507-1.146 1.428-2.258a11.7 11.7 0 0 1 2.191-2.025 11.2 11.2 0 0 1 2.823-1.47 9.7 9.7 0 0 1 3.27-.548q.88 0 1.386.415.515.408.515 1.13 0 .256-.067.506-.058.24-.124.44-.066.199-.066.323 0 .125.116.125.157 0 .481-.257.323-.266.764-.648.44-.39.93-.78.498-.39 1.004-.648.506-.265.946-.265.54 0 .805.274.274.274.382.68.117.398.166.806.058.406.141.68.083.266.316.266a.74.74 0 0 0 .357-.1.77.77 0 0 1 .398-.108.6.6 0 0 1 .49.224q.19.225.19.523 0 .24-.115.424a.9.9 0 0 1-.29.298q-.275.183-.607.266a2.6 2.6 0 0 1-.622.083q-.623 0-.972-.249a1.5 1.5 0 0 1-.506-.63 3.5 3.5 0 0 1-.224-.748 8 8 0 0 0-.133-.622q-.058-.258-.216-.258-.182 0-.523.29-.34.283-.797.706-.456.416-.979.839a6 6 0 0 1-1.08.705 2.3 2.3 0 0 1-1.07.283q-.531 0-.872-.307-.34-.308-.34-.83 0-.382.1-.706.1-.333.199-.631.1-.307.1-.648 0-.265-.357-.265-1.412 0-2.682.465-1.26.464-2.307 1.22a10.6 10.6 0 0 0-1.801 1.643 8.4 8.4 0 0 0-1.18 1.76q-.414.872-.414 1.553 0 .54.274.863.273.332.822.332.88 0 1.618-.648.747-.639 1.295-1.793.556-1.145.864-2.664.306-1.527.307-3.279 0-1.486-.29-2.772-.292-1.287-.823-2.258t-1.278-1.52a2.73 2.73 0 0 0-1.652-.547q-.69 0-1.228.357-.54.348-.847.954a3 3 0 0 0-.307 1.378q0 1.238.498 2.283a7.5 7.5 0 0 0 1.262 1.876 11.3 11.3 0 0 0 1.602 1.436q.83.598 1.502.963.225.132.316.307.1.166.1.357 0 .291-.225.498a.73.73 0 0 1-.515.2.9.9 0 0 1-.415-.1 12 12 0 0 1-1.618-.971 12 12 0 0 1-1.553-1.304 10.5 10.5 0 0 1-1.311-1.602 8 8 0 0 1-.905-1.86 6.5 6.5 0 0 1-.332-2.074q0-1.23.515-2.2a3.9 3.9 0 0 1 1.41-1.527q.897-.565 2.051-.565 1.27 0 2.3.664 1.037.664 1.784 1.851.747 1.188 1.146 2.773.398 1.577.398 3.403 0 2.15-.407 3.968-.398 1.818-1.162 3.162-.764 1.354-1.85 2.1a4.2 4.2 0 0 1-2.441.748M.98 19.926q-.315 0-.54-.24a.76.76 0 0 1-.223-.549q0-.306.224-.54a.72.72 0 0 1 .54-.232h24.022q.323 0 .548.224.224.233.224.548t-.224.548a.72.72 0 0 1-.548.24zm-.348-3.204a.614.614 0 0 1 0-.888l2.839-2.831a.6.6 0 0 1 .44-.183.56.56 0 0 1 .44.183.614.614 0 0 1 0 .888l-2.84 2.83a.63.63 0 0 1-.44.192.59.59 0 0 1-.44-.191m2.839 0-2.84-2.83a.59.59 0 0 1-.19-.44q0-.266.19-.45a.59.59 0 0 1 .44-.19q.258 0 .44.19l2.84 2.823q.19.192.19.448a.61.61 0 0 1-.19.449.59.59 0 0 1-.44.19.59.59 0 0 1-.44-.19"
      />
    </svg>
  );
}

export function Sign({ onSigned }: { onSigned(): void }) {
  const [performRequest, setPerformRequest] = useState(false);
  const { data, isLoading } = useSWR(
    performRequest ? 'signPetition' : null, () => {
      return fetch('/api/petitions/freedurov/sign', {
        method: 'PATCH',
        headers: {
          'x-init-data': window.Telegram.WebApp.initData,
        },
      })
        .then(r => r.json())
        .then(r => {
          if (r.error) {
            window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('heavy');
            throw new Error(r.message);
          }

          window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('soft');
          return r.data;
        }).catch(e => {
          window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('rigid');
        });
    },
  );

  const onSignClick = useCallback(() => {
      window.Telegram?.WebApp?.HapticFeedback?.impactOccurred('light');
      setPerformRequest(true);
  }, []);

  useEffect(() => {
    data && onSigned();
  }, [onSigned, data]);

  return (
    <Section className={styles.root}>
      <Button
        icon={<SignIcon/>}
        disabled={isLoading}
        onClick={onSignClick}
        after={isLoading && (
          <div className={styles.spinner}>
            <span className={styles.spinnerThumb}/>
          </div>
        )}
      >
        <Trans i18nKey={'sign_letter'}/>
      </Button>
      <div className={styles.info}>
        <Trans i18nKey={'already_supported'}/>
      </div>
    </Section>
  );
}
