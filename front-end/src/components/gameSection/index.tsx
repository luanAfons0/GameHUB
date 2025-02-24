import styles from "./styles.module.scss";
import Container from "../Container";
import FlexRow from "../FlexRow";
import LeftMenu from "../LeftMenu";

export default function GameSection() {
  return (
    <FlexRow>
      <Container>
        <div className={styles.gameSection}>
          <LeftMenu />
        </div>
      </Container>
    </FlexRow>
  );
}
