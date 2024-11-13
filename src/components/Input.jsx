import { useRef } from "react";
import { IoAdd } from "react-icons/io5";

function Input({ addTodo }) {

  const setNewName = useRef();
  const setNewDate = useRef();

  const addClickHandle = (event) => {
    event.preventDefault();
    const newName = setNewName.current.value;
    setNewName.current.value="";
    const newDate = setNewDate.current.value;
    setNewDate.current.value="";
    addTodo(newName, newDate);
  }

  return (
    <form  className="row margin" onSubmit={addClickHandle}>
      <div className="col-md-5 col-sm-3 input">
        <input type="text"
          placeholder="Enter Task"
          ref={setNewName} />
      </div>
      <div className="col-md-5 col-sm-3 input">
        <input type="date"
          ref={setNewDate} />
      </div>
      <div className="col col-lg-2">
        <button type="submit"
          className="btn btn-success button"
          >
          <IoAdd className="addIcon" /></button>
      </div>
    </form>
  )
}

export default Input