// We want to track the ages of our club members:
// The founders of the club's ages are 42, 33, 68. Create a component that displays the ages and allows you to add/remove ages in the list.

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
    list.push({ id: newId, age: inputValue });
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
