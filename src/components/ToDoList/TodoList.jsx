import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const onItemChangeHandler = (event) => {
    //     console.log(event.target.value);
    setItems(event.target.value);
  };
  const onAddItemHandler = () => {
    console.log(todoItems);
    setTodoItems((prevState) => [...prevState, items]);
    console.log(items);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        placeholder="enter your item"
        value={items}
        onChange={onItemChangeHandler}
      />
      <button onClick={onAddItemHandler}>add</button>
    </div>
  );
};
