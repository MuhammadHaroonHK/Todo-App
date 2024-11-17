import { useContext } from "react";
import { ItemsStore } from "../store/ItemsStore";

const NoTask = () => {
    const { toDoItems } = useContext(ItemsStore);
    return <>
        {toDoItems.length === 0 && <h2>No tasks today, enjoy your day</h2>}
    </>
}

export default NoTask;