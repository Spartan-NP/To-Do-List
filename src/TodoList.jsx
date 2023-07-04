import React from "react";
import "./App.css";

const TodoList = (props) => {
  return (
    <>
      <div className="list">
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={()=>{
            return props.onSelect(props.id);
          }}
        ></i>
        <li>{props.type}</li>
      </div>
    </>
  );
};

export default TodoList;
