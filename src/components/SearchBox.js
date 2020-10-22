import React, { useState } from "react";

export default function SearchBox(props) {
    const [text ,setText] = useState("");

   const onSubmitHandler = (e) =>{
        e.preventDefault();
        props.onSubmit(text)
    }
  return (
    <div className="container">
      <form onSubmit={onSubmitHandler} className="ui form">
        <div className="field">
          <label>Search</label>
          <input onChange={(e)=>setText(e.target.value)} type="text"></input>
        </div>
      </form>
    </div>
  );
}
