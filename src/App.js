import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  let [listItem, setListItem] = useState("");
  let [listName, setListName] = useState([]);

  let inputEvent = (event) => {
    setListItem(event.target.value);
  };

  let addItem = () => {
    setListName((oldItem) => {
      return [...oldItem, listItem];
    });
    setListItem("");
  };

  let deleteItem = (id) => {
    setListName((oldItem) => {
      return oldItem.filter((curr, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main">
        <div className="body">
          <br />
          <h1 className="heading">ToDo List</h1>
          <br />

          <div className="writing">
            <input
              type="text"
              placeholder="Add a Item"
              onChange={inputEvent}
              value={listItem}
            />
            <button onClick={addItem}>+</button>
          </div>

          <ol>
            {listName.map((curr, index) => {
              return (
                <>
                  <TodoList
                    type={curr}
                    id={index}
                    key={index}
                    onSelect={deleteItem}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
