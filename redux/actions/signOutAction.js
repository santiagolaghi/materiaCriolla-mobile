import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from '../../utils/asyncStorage';
const api = 'https://materiacriolla.onrender.com';
// Acción asincrónica para cerrar sesion
const signOut = createAsyncThunk('signOut', async (data) => {
    let headers = { headers: { 'Authorization': `Bearer ${data}` } }
    try {
        const res=await axios.post(api + '/auth/signOut',null,headers)
        await storage.remove({key:'token'})
        await storage.remove({key:'user'})
        return res.data.message
    } catch (error) {
        console.log("error", error)
    }
})
export default signOut