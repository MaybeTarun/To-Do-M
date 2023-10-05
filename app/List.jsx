import React, { useState } from 'react';

function List() {
  const [itemList, setItemList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setItemList(event.target.value);
  };

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, itemList];
    });

    setItemList("");
  };

  const dltItem = () => {
    con
  };

  return (
    <>
      <div className="itementer">
        <input className="input" type="text" placeholder="Enter Item" value={itemList} onChange={itemEvent}></input>
        <button className="additem" onClick={addItem}>+</button>
      </div>
      <ul className="items">
        {items.map((item, index) => {
          return (
            <>
            <li key={index}><button className="dltitem" onClick={dltItem}>x</button> {item}</li>
            </>
          )
        })}
      </ul>
    </>
  );
}

export default List;
