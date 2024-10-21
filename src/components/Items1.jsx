

function Items1 (props) {
    return (
      <div className="row margin">
      <div className="col-md-5 col-sm-4 input">
        <span ><p>{props.task}</p></span>
      </div>
      <div className="col-md-5 col-sm-4 input">
        <span><p>{props.date}</p></span>
      </div>
      <div className="col col-lg-2">
      <button type="button" className="btn btn-danger button">Delete</button>
      </div>
    </div>
    )
}

export default Items1