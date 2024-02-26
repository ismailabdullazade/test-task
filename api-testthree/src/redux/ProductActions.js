import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL, API_PASSWORD } from '../../static';
import axios from 'axios';
import { MD5 } from 'crypto-js';

console.log(BASE_URL+"Base url");

const createXAuthString = () => {
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); 
    const authString = MD5(`${API_PASSWORD}_${timestamp}`); 
    return authString;
}
export const fetchIds = createAsyncThunk('products/fetchIds', async ({ offset, limit }) => {
    const requestData = {
        "action": "get_ids",
        "params": {"offset": offset, "limit": limit}
    };
    
    const response = await axios.post(BASE_URL, requestData, {
        headers: {
          'X-Auth': createXAuthString(),
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        }
    });
    return response.data.result;
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (ids) => {
    const requestData = {
        action: 'get_items',
        params: { ids },
    };

    const response = await axios.post(BASE_URL, requestData, {
        headers: {
          'X-Auth': createXAuthString(),
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        }
    });

    const uniqueProductsMap = new Map();

    response.data.result.forEach(product => {
      if (!uniqueProductsMap.has(product.id)) {
        uniqueProductsMap.set(product.id, product);
      }
    });
    // Convert the Map values back to an array
    const uniqueProducts = Array.from(uniqueProductsMap.values());
    return uniqueProducts;
});

export const filterProducts = createAsyncThunk('products/filterProducts', async (searchItem) => {
    const requestData = {
        "action": "filter",
        "params": {"product":searchItem,"offset": 0, "limit": 50}
        // "params": {"price":searchItem,"id":searchItem,"brand":searchItem,"product":searchItem}

    }

    const response = await axios.post(BASE_URL, requestData, {
        headers: {
          'X-Auth': createXAuthString(),
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        }
    });

    console.log(response.data.result+"filter result");

    return response.data.result;
});

// export const filterProducts = createAsyncThunk('',async{searchItem}) => {

//     const requestData = {
//         "action": "filter",
//         "params": {"price":searchItem,"id":searchItem,"brand":searchItem,"product":searchItem}
//     }

//     const response = await axios.post(BASE_URL, requestData, {
//         headers: {
//           'X-Auth': createXAuthString(),
//           'Content-Type': 'application/json', // Adjust content type as per your API requirements
//         }
//     });
//     return response.data.result;
// }
