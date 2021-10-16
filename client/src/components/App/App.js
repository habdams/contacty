import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

export const App=() => {

  const[ firstName, setFirstName] = useState("");
  const[ lastName, setLastName] = useState("");
  const[ email, setEmail] = useState("");

const addToList = () => {
  Axios.post("http://localhost:3001/insert",{
      firstName:firstName,
      lastName: lastName,
      email:email,
  });
};

  return (
    <div className="App"> 
      <h1>Contact App</h1>

      <div className="formElement">
        <label name="firstName">First name</label>
        <input type="text" id="fname" required onChange={(event)=>{
          setFirstName(event.target.value)
        }} />
      </div>

      <div className="formElement">
        <label name="lastName">Last name</label>
        <input type="text" id="lname" onChange={(event)=>{
          setLastName(event.target.value)
        }} />
      </div>

      <div className="formElement">
        <label name="email">Email Address</label>
        <input type="email" id="email" required onChange={(event)=>{
          setEmail(event.target.value)
        }} />
      </div>

      <button onClick={addToList} >Save contact</button>
      <a href="/contact">View Contact</a>
        

      
    </div>
  );
}


