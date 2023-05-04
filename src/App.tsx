import React from "react";
import Header from "./components/Header/Header";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <main>{/* <HomeOffice /> */}</main>
    </div>
  );
};

export default App;
