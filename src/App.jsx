import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar>
      </NavBar>
      <ItemListContainer  />
      <ItemDetailContainer itemId={2}/>
      </BrowserRouter>
    </>
  )
}

export default App
