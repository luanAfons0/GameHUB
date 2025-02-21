import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Container({
  children,
  fullWidth = false,
}: {
  children: ReactNode[] | ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}>
      {children}
    </div>
  );
}
