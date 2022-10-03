
import PersistentDrawerLeft from "./components/UI/PersistentDrawerLeft";
import SearchBar from "./components/UI/SearchBar";
import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.container}>
      <PersistentDrawerLeft/>
      <SearchBar/>
    </div>
  );
}

export default App;
