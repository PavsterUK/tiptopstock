import PersistentDrawerLeft from "./components/UI/PersistentDrawerLeft";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <PersistentDrawerLeft />
      <div className={styles.searchBox}>
        <input placeholder="Search" />
      </div>
      <div className={styles.resultList}>
        <ul>
          <li>
            TURNING INSERTS CNMG120408
          </li>
          <li>
            TURNING INSERTS CNMG120408
          </li>
          <li>
            TURNING INSERTS CNMG120408
          </li>
          <li>
            TURNING INSERTS CNMG120408
          </li>
          <li>
            TURNING INSERTS CNMG120408
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
