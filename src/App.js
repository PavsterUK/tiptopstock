import React, { useState } from "react";
import PersistentDrawerLeft from "./components/UI/PersistentDrawerLeft";
import styles from "./App.module.css";
import StockItemModal from "./components/stockItem/StockItemModal";

const items = [
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "DNMG150608-wpp20s",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WSM20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },

  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "DNMG150608-wpp20s",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WSM20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },

  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
  {
    name: "CNMG120408-WPP20S",
    vendor: "walter",
    desc: "mild steel turning insets",
    stockQty: "10",
    minimumQty: "5",
    supplEmail: "getsomeinserts@gmail.com",
    locationNo: "225",
  },
];

function App() {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <div className={styles.container}>
      <PersistentDrawerLeft />
      <div className={styles.searchBox}>
        <input placeholder="Search" onChange={onSearchChange}/>
      </div>
      <div className={styles.resultList}>
        <ul>
          {filteredItems.map((item) => (
            <li>{<StockItemModal name={item.name}/>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
