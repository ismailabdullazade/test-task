import PropTypes from 'prop-types'



const ProductCard = ({product:{id,brand,price,product}}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product}</h5>
      </a>
      <div className="flex flex-col mt-2.5 mb-5">
        {
          brand ? (<p>Brand: {brand}</p>) : <p>Brand: unknown</p>
        }
        
        <p className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">ID: {id}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: {price}</span>
        {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
      </div>
    </div>
  </div>
  )
}

ProductCard.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.string,
    product:PropTypes.string,
    price:PropTypes.number,
    brand:PropTypes.string
  })
}

export default ProductCard