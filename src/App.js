// 1. Given an list of ages (let's say 34, 53, 23 to start), create a component that lists them with a button that will remove them from the list if clicked.
// 2. Create an input box that will add another age to the list.
// 3. What are some ways you would improve this component?

import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [inputValue, setinputValue] = useState("");
  const [currentId, setCurrentId] = useState(2);
  const [list, setList] = useState([
    { id: 0, age: 42 },
    { id: 1, age: 33 },
    { id: 2, age: 68 },
  ]);

  const onRemoveItem = (id) => {
    const filteredList = list.filter((item) => item.id !== id);
    setList(filteredList);
  };

  const onAddItem = () => {
    const newId = currentId + 1;
    setCurrentId(newId);
    const updatedList = [...list, { id: newId, age: inputValue }];
    setList(updatedList);
    console.log("updatedList", updatedList);
    setinputValue("");
  };

  return (
    <div>
      <div className="App-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            console.log(e.target.value);
            setinputValue(e.target.value);
          }}
        />
        <button type="button" onClick={() => onAddItem()}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            The person is {item.age} years old.
            <button type="button" onClick={() => onRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
