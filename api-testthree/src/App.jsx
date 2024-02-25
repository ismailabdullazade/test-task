import { Provider } from "react-redux"
import ProductList from "./components/ProductList"
import store from "./redux/store.js"
// import Pagination from "./components/Pagination.jsx"


function App() {

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-600'>Salam</h1>
      <Provider store={store}>
        <ProductList/>
      </Provider>

    </div>
  )
}

export default App
