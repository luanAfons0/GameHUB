import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Container({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
