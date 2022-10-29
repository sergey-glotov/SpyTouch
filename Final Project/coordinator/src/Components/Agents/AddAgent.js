import React, {useState} from "react";
import AgentForm from "./AgentForm";
import AddButton from "./AddButton";
import styles from "./AddAgent.module.css";

const AddAgent = (props) => {
  const [isAdding, updateIsAdding] = useState(false);

  const startAddingHandler = () =>{
    updateIsAdding(true);
  };

  const cancelHandler = () =>{
    updateIsAdding(false);
  }

  const saveAgentHandler = (agent) =>{
    props.onAdd(agent);
  };

  return (
    <div className={styles.container}>
      {!isAdding && <button className={styles.button} onClick={startAddingHandler}>הוספת סוכן</button>}
      {isAdding && <AgentForm onCancel={cancelHandler} onSaveAgent={saveAgentHandler} />}
    </div>
  );
};

export default AddAgent;
