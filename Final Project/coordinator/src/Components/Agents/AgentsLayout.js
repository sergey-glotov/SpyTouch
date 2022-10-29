import React from "react";
import AgentsList from "./AgentsList";
import styles from "./AgentsLayout.module.css";

const AgentsLayout = (props) => {
  if(props.items.length === 0){
    return <h1>No Agents Registered.</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>פעולות</th>
            <th>משימה</th>
            <th>כתובת</th>
            <th>עיר מגורים</th>
            <th>מזהה</th>
            <th>משפחה</th>
            <th>שם</th>
          </tr>
        </thead>
        <AgentsList items={props.items} />
      </table>
    </div>
  );
};

export default AgentsLayout;
