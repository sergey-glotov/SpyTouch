import React, {useState} from "react";
import Header from "./Components/UI/Header";
import styles from "./App.module.css";
import AddAgent from "./Components/Agents/AddAgent";
import AgentsLayout from "./Components/Agents/AgentsLayout";

function App() {
  const [allAgents, updateAllAgents] = useState("");

  const addAgentHandler = (newAgent) => {
    updateAllAgents((prevAgents) => {
      return [...prevAgents, newAgent];
    });
  };

  return (
    <div className={styles.page}>
      <Header />
      <AddAgent onAdd={addAgentHandler} />
      <AgentsLayout items={allAgents} />
    </div>
  );
}

export default App;
