function TodoItem2(params) {
    let Todoname = 'Buy A Shirt'
    let Tododate = '2025/10'
    
return (

    <>
    <div class="container">
  <div class="row">
    <div class="col-6">{Todoname}</div>
    <div class="col-4">{Tododate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  </div>


    </>
)
}
export default TodoItem2