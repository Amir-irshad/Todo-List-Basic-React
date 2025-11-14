import TodoItems from "./Todoitem"

function Todocont({Todocant}) {
    return (
        <>
            <div className="Todo-container">
                {Todocant.map((item) => (<TodoItems Tododate={item.duedate} Todoname={item.name} />))}</div>
        </>
    )
}
export default Todocont