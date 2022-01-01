import React from "react";

function ShowForm(props) {
  return (
    <div>
      

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <td>{props.data.formData ? props.data.formData.name : ""}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Last Name</th>
            <td>{props.data.formData ? props.data.formData.lastname : ""}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{props.data.formData ? props.data.formData.email : ""}</td>
          </tr>
          <tr>
            <th>Password</th>
            <td>{props.data.formData ? props.data.formData.password : ""}</td>
          </tr>
          <tr>
            <th>Conact No.</th>
            <td>{props.data.formData ? props.data.formData.contact : ""}</td>
          </tr>
          <tr>
            <th>CNIC No.</th>
            <td>{props.data.formData ? props.data.formData.cnic : ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowForm;
