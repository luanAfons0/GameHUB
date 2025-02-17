import styles from "./styles.module.scss";

export default function Canvas() {
  return (
    <canvas className={styles.container} width={480} height={320}></canvas>
  );
}
