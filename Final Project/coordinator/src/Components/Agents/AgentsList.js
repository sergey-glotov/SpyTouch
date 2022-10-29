import React from "react";
import AgentItem from "./AgentItem";

const AgentsList = (props) => {

  return (
    <tbody>
    {props.items.map(agent =>
      <AgentItem
         fname={agent.agentFname}
         lname={agent.agentLname}
         id={agent.agentId}
         city={agent.agentCity}
         address={agent.agentAddress}
         mission={agent.agentMission}
         key={Math.random()}
       />
     )}
  </tbody>
  );
};

export default AgentsList;
