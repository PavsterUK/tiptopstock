import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
      placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
