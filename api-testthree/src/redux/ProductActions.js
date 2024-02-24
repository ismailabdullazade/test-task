import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { MD5 } from 'crypto-js';

export const fetchIds = createAsyncThunk('products/fetchIds', async ({ offset, limit }) => {
    const password = 'Valantis'; // Replace 'your_password' with your actual password
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Format timestamp as YYYYMMDD
    const authString = MD5(`${password}_${timestamp}`); // Calculate auth string using md5

    const requestData = {
        "action": "get_ids",
        "params": {"offset": offset, "limit": limit}
    };
    
    const response = await axios.post('http://api.valantis.store:40000', requestData, {
        headers: {
          'X-Auth': authString,
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        }
    });
    return response.data.result;
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (ids) => {
    const password = 'Valantis'; // Replace 'your_password' with your actual password
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, ''); // Format timestamp as YYYYMMDD
    const authString = MD5(`${password}_${timestamp}`); // Calculate auth string using md5

    const requestData = {
        action: 'get_items',
        params: { ids },
    };

    const response = await axios.post('http://api.valantis.store:40000', requestData, {
        headers: {
          'X-Auth': authString,
          'Content-Type': 'application/json', // Adjust content type as per your API requirements
        }
    });
    return response.data.result;
});
