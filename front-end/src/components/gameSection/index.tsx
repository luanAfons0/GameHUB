import styles from "./styles.module.scss";
import Container from "../Container";
import LeftMenu from "../LeftMenu";
import FlexRow from "../FlexRow";
import Canvas from "../Canvas";

export default function GameSection() {
  return (
    <FlexRow>
      <Container>
        <div className={styles.gameSection}>
          <LeftMenu />
          <Canvas />
        </div>
      </Container>
    </FlexRow>
  );
}
