import PersistentDrawerLeft from "./components/UI/PersistentDrawerLeft";
import styles from "./App.module.css";
import StockItemModal from "./components/stock/StockItemModal";

function App() {
  return (
    <div className={styles.container}>
      <PersistentDrawerLeft />
      <div className={styles.searchBox}>
        <input placeholder="Search" />
      </div>
      {/* <div className={styles.resultList}>
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
      </div> */}
      <StockItemModal/>
    </div>
  );
}

export default App;
