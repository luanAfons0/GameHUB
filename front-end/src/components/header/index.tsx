import Button from "../button";
import Container from "../container";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.infos}>
          <h1>Game HUB</h1>
          <Button text="Login" />
        </div>
      </Container>
    </div>
  );
}
