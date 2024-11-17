import { AiTwotoneDelete } from "react-icons/ai";
import { ItemsStore } from "../store/ItemsStore";
import { useContext } from "react";

const Items1 = ({ todoName, todoDate }) => {

  const { handleDeleteBtn } = useContext(ItemsStore);

  return (
    <div className="row margin">
      <div className="col-md-5 col-sm-3 input"> {todoName} </div>
      <div className="col-md-5 col-sm-3 input"> {todoDate} </div>
      <div className="col col-lg-2">
        <button type="button"
          className="btn btn-danger button"
          onClick={() => handleDeleteBtn(todoName)}><AiTwotoneDelete className="addIcon" /></button>
      </div>
    </div>
  )
}

export default Items1