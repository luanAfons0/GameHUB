import styles from "./styles.module.scss";
import Canvas from "../canvas";

function App() {
  return (
    <div className={styles.container}>
      <h1>Game HUB</h1>
      <Canvas />
    </div>
  );
}

export default App;
