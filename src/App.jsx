import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return (
    <>
      <NavBar>
      </NavBar>
      <ItemListContainer greetings = {["Hola Mundo"]} />
    </>
  )
}

export default App
