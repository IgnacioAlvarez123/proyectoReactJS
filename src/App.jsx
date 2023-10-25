import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/menu/" element={<ItemListContainer />} />
          <Route path="/menu/:categoria" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
