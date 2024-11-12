import { useState } from "react";
import { IoAdd } from "react-icons/io5";

function Input({ addTodo }) {

  const [todoName, setTodoName] = useState([]);
  const [todoDate, setTodoDate] = useState([]);

  const handleName = (event) => {
    setTodoName(event.target.value);
  }

  const handleDate = (event) => {
    setTodoDate(event.target.value);
  }

  const handleAddBtn = () => {
    addTodo(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="row margin">
      <div className="col-md-5 col-sm-3 input">
        <input type="text"
          placeholder="Enter Task"
          value={todoName}
          onChange={handleName} />
      </div>
      <div className="col-md-5 col-sm-3 input">
        <input type="date"
          value={todoDate}
          onChange={handleDate} />
      </div>
      <div className="col col-lg-2">
        <button type="button"
          className="btn btn-success button"
          onClick={handleAddBtn}>
            <IoAdd className="addIcon"/></button>
      </div>
    </div>
  )
}

export default Input