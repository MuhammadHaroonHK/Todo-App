

const Items1 = ({ todoName, todoDate, handleDeleteBtn }) => {

  return (
    <div className="row margin">
      <div className="col-md-5 col-sm-3 input"> {todoName} </div>
      <div className="col-md-5 col-sm-3 input"> {todoDate} </div>
      <div className="col col-lg-2">
        <button type="button"
          className="btn btn-danger button"
          onClick={() => handleDeleteBtn(todoName)}>Delete</button>
      </div>
    </div>
  )
}

export default Items1