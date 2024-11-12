import { useState } from "react";
import Heading from "./components/Heading"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  const [toDoItems, setToDoItems] = useState([]);
  const addNewItems = (itemName, itemDate) => {
    let newItems = [...toDoItems,
    { name: itemName, date: itemDate }
    ];
    setToDoItems(newItems)
  }

  const handleDeleteBtn = (checkname) => {
    const filterArray = toDoItems.filter(item => item.name !== checkname);
    setToDoItems(filterArray);
  }

  return (
    <>
      <center>
          <div className="custom">
            <Heading />
            <Input addTodo={addNewItems} />
            <TodoItem doItem={toDoItems}
              handleDeleteBtn={handleDeleteBtn} />
          </div>
      </center>
    </>
  )
}

export default App
