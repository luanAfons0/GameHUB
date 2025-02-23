import styles from "./styles.module.scss";
import { ReactNode } from "react";

export default function FlexRow({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <section className={styles.center}>{children}</section>;
}
