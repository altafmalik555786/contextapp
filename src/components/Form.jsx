import React, { useState } from "react";

export default function Form(props) {
    
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [cnic, setCnic] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      password: password,
      email: email,
      lastname: lastname,
      contact: contact,
      cnic: cnic,

    };
    props.addToFormHandler(obj);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="Uname">First Name</label>
        <input
          type="text"
          name="Uname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="unamelast">Last Name</label>
        <input
          type="text"
          name="unamelast"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="uemail">Email______</label>
        <input
          type="text"
          name="uemail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="upassword">Password__</label>
        <input
          type="password"
          name="upassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="ucontact">Contact #__</label>
        <input
          type="number"
          name="ucontact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <br />
        <label htmlFor="ucnic">CNIC No___</label>
        <input
          type="number"
          name="ucnic"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    

      
    </div>
  );
}
