

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {



  return (
    <div>

      <div className='contador'>
        <button className='btn-resta' onClick={handleRestar} >-</button>
        <p>{cantidad}</p>
        <button className='btn-suma' onClick={handleSumar} >+</button>


      </div>
      <button className="btn" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;