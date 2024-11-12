import Items1 from "./Items1";


const TodoItem = ({ doItem, handleDeleteBtn }) => {

    return (
        <div>
            {doItem.map((item) =>
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