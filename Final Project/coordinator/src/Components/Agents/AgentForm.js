import React, {useState} from "react";
import styles from "./AgentForm.module.css";

const AgentForm = (props) => {
  const [fname, updateFname] = useState("");
  const [lname, updateLname] = useState("");
  const [id, updateId] = useState("");
  const [city, updateCity] = useState("");
  const [street, updateStreet] = useState("");
  const [mission, updateMission] = useState("");

  const fnameChangeHandler= (event) => {
    updateFname(event.target.value);
  };

  const lnameChangeHandler= (event) => {
    updateLname(event.target.value);
  };

  const idChangeHandler= (event) => {
    updateId(event.target.value);
  };

  const cityChangeHandler= (event) => {
    updateCity(event.target.value);
  };

  const streetChangeHandler= (event) => {
    updateStreet(event.target.value);
  };

  const missionChangeHandler= (event) => {
    updateMission(event.target.value);
  };


  const submitHandler = (event) =>{
    event.preventDefault();

    const agentData ={
      agentFname: fname,
      agentLname: lname,
      agentId: id,
      agentCity: city,
      agentAddress: street,
      agentMission: mission
    };

    props.onSaveAgent(agentData);
    updateFname("");
    updateLname("");
    updateId("");
    updateCity("");
    updateStreet("");
    updateMission("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={fname} onChange={fnameChangeHandler} />
      <label>שם פרטי</label><br/>
      <input type="text" value={lname} onChange={lnameChangeHandler} />
      <label>שם משפחה</label><br/>
      <input type="number" value={id} onChange={idChangeHandler} />
      <label>מזהה</label><br/>
      <input type="text" value={city} onChange={cityChangeHandler} />
      <label>עיר מגורים</label><br/>
      <input type="text" value={street} onChange={streetChangeHandler} />
      <label>רחוב (מס' בית)</label><br/>
      <input type="text" value={mission} onChange={missionChangeHandler} />
      <label>משימה</label><br/>
      <button type="submit">הוספה</button>
      <button type="button" className={styles.cancel} onClick={props.onCancel}>ביטול</button>
    </form>
  );
};

export default AgentForm;
