import { useState } from "react";
import Heading from "./components/Heading"
import Input from "./components/Input"
import TodoItem from "./components/TodoItem";
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemsStore } from "./store/ItemsStore";
import NoTask from "./components/NoTask";

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
      <ItemsStore.Provider
        value={{
          addNewItems: addNewItems,
          toDoItems: toDoItems,
          handleDeleteBtn: handleDeleteBtn
        }}>
        <center>
          <div className="custom">
            <Heading />
            <Input />
            <NoTask />
            <TodoItem />
          </div>
        </center>
      </ItemsStore.Provider>
    </>
  )
}

export default App
