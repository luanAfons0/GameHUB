import styles from "./styles.module.scss";

type Button = {
  text: string;
};

export default function Button({ text }: Button) {
  return <button className={styles.button}>{text}</button>;
}
