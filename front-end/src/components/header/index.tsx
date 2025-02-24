import styles from "./styles.module.scss";
import Container from "../Container";
import Button from "../Button";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.infos}>
          <NavLink to="/">
            <h1>Game HUB</h1>
          </NavLink>
          <Button text="Login" />
        </div>
      </Container>
    </div>
  );
}
