// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectFilteredProducts } from "../redux/ProductSlice";

// const Pagination = () => {

//     const products = useSelector(selectFilteredProducts);

//     const [currentPage, setCurrentPage] = useState(1);
//     const productsPerPage = 5;
//     const totalPages = Math.ceil(products.length / productsPerPage);
  
//     // Change page
//     const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     };
  
//     // Calculate indexes for displaying products on the current page
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
//       // Generate array of page numbers
//       let pageNumbers = [];
  
//       if (totalPages <= 9) {
//         pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
//       } else {
//         const leftSide = currentPage - 2;
//         const rightSide = currentPage + 2;
//         const firstPage = 1;
//         const lastPage = totalPages;
    
//         if (currentPage <= 4) {
//           pageNumbers = [...Array(5).keys()].map(i => i + 1);
//           pageNumbers.push('...');
//           pageNumbers.push(lastPage);
//         } else if (currentPage >= totalPages - 3) {
//           pageNumbers.push(firstPage);
//           pageNumbers.push('...');
//           pageNumbers = [...Array(5).keys()].map(i => totalPages - 4 + i);
//         } else {
//           pageNumbers.push(firstPage);
//           pageNumbers.push('...');
//           for (let i = leftSide; i <= rightSide; i++) {
//             pageNumbers.push(i);
//           }
//           pageNumbers.push('...');
//           pageNumbers.push(lastPage);
//         }
//       }
  


//   return (
//     <div>
//       <div className='flex justify-center gap-3'>
//         <button
//         className='px-2 hover:bg-gray-100 rounded-sm text-lg'
//         onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//         {pageNumbers.map((number, index) => (
//           <button className={number === currentPage ? 'px-2 bg-gray-100 rounded-sm text-lg':'px-2 hover:bg-gray-100 rounded-sm text-lg'} key={index} onClick={() => number !== '...' && goToPage(number)}>{number}</button>
//         ))}
//         <button className='px-2 hover:bg-gray-100 rounded-sm text-lg' onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   )
// }

// export default Pagination