import styles from "./styles.module.scss";
import { ReactNode } from "react";

export default function PageDisplay({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <main className={styles.display}>{children}</main>;
}
