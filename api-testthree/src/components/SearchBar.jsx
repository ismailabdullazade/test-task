import { useDispatch, useSelector } from "react-redux"
import { setSearchItem } from "../redux/ProductSlice";
import { filterProducts, fetchProducts } from "../redux/ProductActions";


const SearchBar = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector(state=>state.products.searchItem);
  const ids = useSelector(state => state.products.ids);

  const handleChange = (e) => {
    dispatch(setSearchItem(e.target.value))
    dispatch(filterProducts(searchItem));
    dispatch(fetchProducts(ids));
  }

  return (
    <div>
        <input 
        value={searchItem}
        onChange={handleChange}
        placeholder='Search...'
        type="search" />
    </div>
  )
}

export default SearchBar