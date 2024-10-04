import styles from './Header.module.scss';

export function Header(props: { title: string }) {
  return (
    <>
      <div className={styles.imgContainer}>
        <img
          height={144}
          width={144}
          alt="digital-resistance"
          src="/img/dr/dark@1x.png"
          srcSet="/img/dr/dark@2x.png 2x"
        />
      </div>
      <div className={styles.hashTags}>
        <span>#DigitalResistance</span>
        <span>#FreeDurov</span>
      </div>
      <h1 className={styles.title}>
        {props.title}
      </h1>
    </>
  );
}