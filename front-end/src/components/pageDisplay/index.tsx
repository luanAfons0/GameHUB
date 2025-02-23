import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function PageDisplay({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <main className={styles.display}>{children}</main>;
}
