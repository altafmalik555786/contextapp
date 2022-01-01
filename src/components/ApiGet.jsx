import React from "react";

function ApiGet(props) {
  if (props){
    console.log("Props: ", props);
  }

  return (
    <div>
      <h1>Here Accessing API</h1>
      
      <button onClick={() => props.fetchPost()}>Show API</button>

      { props.apidata ? props.apidata.map((item)=>(
        <table key={item.id}>
          <thead>
        <tr>
          <th>User ID</th>
          <th >ID</th>
          <th>Title</th>
          <th>Body</th>

        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{item.userId}</td>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
         
        </tr>
        </tbody>
      </table>
      )) : ""}
      
      
     
    </div>
  );
}

export default ApiGet;
