

// const ProductList = ({ products }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 50;
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   // Change page
//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Calculate indexes for displaying products on the current page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Generate array of page numbers
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div>
//       <ul>
//         {currentProducts.map(product => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//         {pageNumbers.map(number => (
//           <button key={number} onClick={() => goToPage(number)}>{number}</button>
//         ))}
//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default ProductList;
