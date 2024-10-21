import Heading from "./components/Heading"
import Input from "./components/Input"
import Items1 from "./components/Items1"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  let tasks=[];
  let dates=[];
  let taskItems=tasks.map(task => {task});
  let datestore=tasks.map(date => {date});

  return (
    <>
    <center>
    <div className="container">
        <div className="custom">
        <Heading />
        <Input/>
        <Items1 task="HTML" date="12/10/2024"/>
        <Items1 task="CSS" date="18/11/2024"/>
        <Items1 task="JavaScript" date="29/11/2024"/>
          </div>
          </div>
          </center>
    </>
  )
}

export default App
