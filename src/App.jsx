import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart"


const App = () => {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/menu/" element={<ItemListContainer />} />
            <Route path="/menu/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
