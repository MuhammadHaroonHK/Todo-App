import { createContext } from "react";

export const ItemsStore = createContext({
    addNewItems: () => { },
    toDoItems: [],
    handleDeleteBtn: () => { }
});

