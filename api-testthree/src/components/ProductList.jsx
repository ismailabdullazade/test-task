import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIds, filterProducts } from '../redux/ProductActions.js';
import { fetchProducts } from '../redux/ProductActions.js';
import ProductCard from './ProductCard.jsx';
import { selectFilteredProducts } from '../redux/ProductSlice.js';
import SearchBar from './SearchBar.jsx';

const ProductList = () => {
  const dispatch = useDispatch();
  const ids = useSelector(state => state.products.ids);

  const products = useSelector(selectFilteredProducts);

  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  // console.log(products);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const totalPages = Math.ceil(products.length / productsPerPage);

    // Change page
    const goToPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  // Calculate indexes for displaying products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Generate array of page numbers
    let pageNumbers = [];

    if (totalPages <= 9) {
      pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      const leftSide = currentPage - 2;
      const rightSide = currentPage + 2;
      const firstPage = 1;
      const lastPage = totalPages;
  
      if (currentPage <= 4) {
        pageNumbers = [...Array(5).keys()].map(i => i + 1);
        pageNumbers.push('...');
        pageNumbers.push(lastPage);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(firstPage);
        pageNumbers.push('...');
        pageNumbers = [...Array(5).keys()].map(i => totalPages - 4 + i);
      } else {
        pageNumbers.push(firstPage);
        pageNumbers.push('...');
        for (let i = leftSide; i <= rightSide; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(lastPage);
      }
    }



  useEffect(() => {
    dispatch(fetchIds({ offset:0, limit: 50 }));
  }, [dispatch]);

  useEffect(() => {
    if (ids.length > 0) {
      dispatch(fetchProducts(ids));
    }
  }, [dispatch, ids]);

  const searchItem = "Золотое";

  useEffect(() => {
    console.log("3cu useffect");
    if (searchItem.length > 0) {
      console.log("3500 icine");
      dispatch(filterProducts(searchItem));
    }
  }, [dispatch,searchItem]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      <SearchBar/>
      <div className='flex justify-center gap-3'>
        <button
        className='px-2 hover:bg-gray-100 rounded-sm text-lg'
        onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        {pageNumbers.map((number, index) => (
          <button className={number === currentPage ? 'px-2 bg-gray-100 rounded-sm text-lg':'px-2 hover:bg-gray-100 rounded-sm text-lg'} key={index} onClick={() => number !== '...' && goToPage(number)}>{number}</button>
        ))}
        <button className='px-2 hover:bg-gray-100 rounded-sm text-lg' onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>

      
      <div className='flex justify-evenly flex-wrap p-2'>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
