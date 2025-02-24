import styles from "./styles.module.scss";

type LinkType = {
  url: string;
  text: string;
};

export default function Link({ text, url }: LinkType) {
  return (
    <a className={styles.link} href={url}>
      {text}
    </a>
  );
}
