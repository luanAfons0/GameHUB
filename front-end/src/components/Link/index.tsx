import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

type LinkType = {
  url: string;
  text: string;
};

export default function Link({ text, url }: LinkType) {
  return (
    <NavLink className={styles.link} to={url}>
      {text}
    </NavLink>
  );
}
