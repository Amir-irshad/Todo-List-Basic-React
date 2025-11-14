function TodoItems({Tododate , Todoname}) {
   
    
return (

    <>
    <div className="container">
  <div className="row">
    <div className="col-6">{Todoname}</div>
    <div className="col-4">{Tododate}</div>
    <div className="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  </div>


    </>
)
}
export default TodoItems