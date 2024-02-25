import { useDispatch, useSelector } from "react-redux"
import { setSearchItem } from "../redux/ProductSlice";


const SearchBar = () => {
  const dispatch = useDispatch();
  const searchItem = useSelector(state=>state.products.searchItem);

  const handleChange = (e) => {
    dispatch(setSearchItem(e.target.value))
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