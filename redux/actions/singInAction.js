import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from '../../utils/asyncStorage'
const api = 'https://materiacriolla.onrender.com';
const login = createAsyncThunk('login', async (data) => {
    if (data.token) {
        return {
            token: data.token,
            user: data.user
        }
    }
    try {
        if (data.token) {
            return {token:data.token,
            user:data.token}
        }
        let res = await axios.post(api + '/auth/signIn', data)
        console.log(res);
        await storage.save({key:'token',data:{token:res.data.response.token}})
        await storage.save({key:'user',data:{user:res.data.response.user}}) 
        return {
            token: res.data.response.token,
            user: res.data.response.user
        }
    } catch (error) {
        console.log(error);
        return { error: error.response.data.error }
    }
})
export default login
