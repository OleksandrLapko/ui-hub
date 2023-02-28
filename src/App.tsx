import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { TabBar, Tab } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />

        <TabBar>
          <Tab label="Home">
            <div>
              <a>Top</a>
              <button>Press me</button>
            </div>
          </Tab>
          <Tab label="Payments">I'm using Payments tab</Tab>
          <Tab label="Setting">I'm using Setting tab</Tab>
          <Tab label="Dashboard">I'm using Dashboard tab</Tab>
          <Tab label="Feed">I'm using Feed tab</Tab>
          <Tab label="Lines">I'm using Lines tab</Tab>
          <Tab label="Profile">I'm using Profile tab</Tab>
          <Tab label="FAQ">I'm using FAQ tab</Tab>
        </TabBar>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
