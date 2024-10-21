
function Input () {
    return (
        <div className="row margin">
          <div className="col-md-5 col-sm-4 input">
            <input type="text" placeholder="Enter Task" />
          </div>
          <div className="col-md-5 col-sm-4 input">
            <input type="date" />
          </div>
          <div className="col col-lg-2">
          <button type="button" className="btn btn-success button">Add</button>
          </div>
        </div>
    )
}

export default Input