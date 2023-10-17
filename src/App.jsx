import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar>
      </NavBar>
      <ItemListContainer greetings = {["Hola Mundo"]} />
      </BrowserRouter>
    </>
  )
}

export default App
