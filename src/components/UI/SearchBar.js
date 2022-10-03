import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardInner}>
        <label>Search for your required items</label>
        <div className={styles.container}>
          <div className={styles.Icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657789"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <div className={styles.InputContainer}>
            <input placeholder="Start typing eg. cnmg or 12mm Endmill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
