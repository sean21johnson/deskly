import React from "react";
import Header from "./components/Header/Header";
import HomeOffice from "./components/HomeOffice/HomeOffice";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <HomeOffice />
    </div>
  );
};

export default App;
