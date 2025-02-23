import styles from "./styles.module.scss";
import Container from "../Container";
import Button from "../Button";

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
