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

  const dltItem = (index) => {
    setItems((oldItems) => {
      return oldItems.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <div className="itementer">
        <input className="input" type="text" placeholder="Enter Item" value={itemList} onChange={itemEvent}></input>
        <button className="additem" onClick={addItem}>+</button>
      </div>
      <ul className="items">
        {items.map((item, index) => (
          <li key={index}>
            <button className="dltitem" onClick={() => dltItem(index)}>x</button> {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
