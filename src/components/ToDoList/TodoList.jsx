import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export const TodoList = () => {
  const [items, setItems] = useState("");
  const [open, setOpen] = useState(false);
  const [todoItems, setTodoItems] = useState([]);
  const onItemChangeHandler = (event) => {
    //     console.log(event.target.value);
    setItems(event.target.value);
  };
  const onAddItemHandler = () => {
    setTodoItems((prevState) => [...prevState, items]);
    setItems("");
    setOpen(true);
  };
  const onClearHandler = () => {
    setItems("");
  };
  const handleClose = (event, reason) => {
    //     if (reason === "clickaway") {
    //       return;
    //     }
    setOpen(false);
  };
  const action = (
    <>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <input
          placeholder="enter your item"
          value={items}
          onChange={onItemChangeHandler}
        /> */}
        <TextField
          id="outlined-basic"
          label="enter your item"
          variant="outlined"
          placeholder="enter your item"
          value={items}
          onChange={onItemChangeHandler}
        />
        <Button
          variant="contained"
          onClick={onAddItemHandler}
          disabled={!items.length}
        >
          add
        </Button>
        {/* <button onClick={onAddItemHandler} disabled={!items.length}>
          // add //{" "}
        </button> */}
        <Button onClick={onClearHandler}>clear</Button>
        {/* <button >clear</button> */}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {!todoItems.length && <p>No item found.</p>}
          {!!todoItems.length &&
            todoItems.map((element, index) => <p key={index}>{element}</p>)}
        </div>
      </div>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={1000}
          message="item added successfully"
          action={action}
        />
      </div>
    </>
  );
};
