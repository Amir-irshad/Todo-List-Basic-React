import AppTodo from "./components/Apptodo"
import Todoadd from "./components/Todoadd"
import Todocont from "./components/Todocont";
import "./App.css";
function App() {

 const Todocant = [
  {
    name: "Buy anythings",
    duedate: "2026",
  },
  {
    name: "Learn Quant",
    duedate: "2029",
  },
 ];
  return (
    <>
       <center>
      <AppTodo/>
      <Todoadd/>
      <Todocont Todocant={Todocant}/>
       </center>
    </>
  )
}

export default App
