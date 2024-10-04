import { LinkSection } from './LinkSection';
import { StoriesSection } from './StoriesSection';
import { CommunitySection } from './CommunitySection';
import { TwitterSection } from './TwitterSection';
import { SupporterBadgeSection } from './SupporterBadgeSection';

import styles from './Share.module.scss';

export function Share() {
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
    </>
  );
}