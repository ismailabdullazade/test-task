'use client'
import { MD5 } from 'crypto-js';


import { useEffect, useState } from 'react';

const YourComponent = () => {
  const [data, setData] = useState(null);
  const [ids, setIds] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const password = 'Valantis'; // Replace 'your_password' with your actual password
      const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Format timestamp as YYYYMMDD
      const authString = MD5(`${password}_${timestamp}`); // Calculate auth string using md5

      console.log("password=> " +authString);

      const requestOptions = {
        method: 'POST', // Change the method as per your API requirements
        headers: {
          'X-Auth': authString,
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        },
        body: JSON.stringify({
          action: 'filter',
          params: {
            price: 17500.0
          }
        })
      };

      const requestOptionsGetIds = {
        method: 'POST', // Change the method as per your API requirements
        headers: {
          'X-Auth': authString,
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        },
        body: JSON.stringify({
          "action": "get_ids",
          "params": {"offset": 10, "limit": 20}
      
        })
      };

      try {
        const response = await fetch('http://api.valantis.store:40000', requestOptionsGetIds); // Replace 'your_api_endpoint' with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        console.log(responseData.result);
        // setData(responseData);
        setIds(responseData.result)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchDataById = async () => {
    const password = 'Valantis'; // Replace 'your_password' with your actual password
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Format timestamp as YYYYMMDD
    const authString = MD5(`${password}_${timestamp}`); // Calculate auth string using md5

    const requestOptionsGetItems = {
      method: 'POST', // Change the method as per your API requirements
      headers: {
        'X-Auth': authString,
        'Content-Type': 'application/json', // Adjust content type as per your API requirements
      },
      body: JSON.stringify({
        "action": "get_items",
        "params": {"ids": ids}
      
      })
    };

    try {
      const response = await fetch('http://api.valantis.store:40000', requestOptionsGetItems); // Replace 'your_api_endpoint' with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      console.log(responseData.result);
      setData(responseData.result);
      
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  return (
    <div>
      <h1>
        Testing
      </h1>
      <div className='flex flex-wrap bg-slate-400 justify-evenly'>
      {
          data?.map(product => (



            

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.product}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                  <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>


        <button className='p-2 bg-blue-400' onClick={fetchDataById}>
          fetch by id
        </button>
      
    </div>
  );
};

export default YourComponent;
