import Items1 from "./Items1";
import { ItemsStore } from "../store/ItemsStore";
import { useContext } from "react";

const TodoItem = ({ handleDeleteBtn }) => {

    const { toDoItems } = useContext(ItemsStore);

    return (
        <div>
            {toDoItems.map((item) =>
                <Items1
                    key={item.name}
                    todoName={item.name}
                    todoDate={item.date}
                    handleDeleteBtn={handleDeleteBtn}></Items1>
            )}
        </div>
    );
}

export default TodoItem