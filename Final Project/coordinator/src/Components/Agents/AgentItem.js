import React from "react";
import styles from "./AgentItem.module.css";

const AgentItem = (props) => {

  return (
    <tr>
      <td><button type="button">מחיקה</button><button type="button">מסר</button></td>
      <td>{props.mission}</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.id}</td>
      <td>{props.lname}</td>
      <td>{props.fname}</td>
    </tr>
  );
};

export default AgentItem;
