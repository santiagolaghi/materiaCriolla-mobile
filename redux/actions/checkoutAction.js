import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import storage from "../../utils/asyncStorage"

const tokenStorage=storage.load({key:'token'})
const userStorage=storage.load({key:'user'})
const headers = ()=> {
    return {
  headers: { "Authorization": `Bearer ${tokenStorage}` }
    }
}

const addCheckout = createAsyncThunk('addCheckout', async (data) => {
    try {
        const response = await axios.post(`https://materiacriolla.onrender.com/checkout/${userStorage._id}`,data,headers())
        storage.remove({ key: 'user' });
        await storage.save({key:'user',data:{user:response.data.response.user}})
        return {
            user:response.data.response.user,
            message:response.data.message
        }
    } catch (error) {
        return{message:error.response.data.message}
    }
})

const deleteCheckout = createAsyncThunk('deleteCheckout', async (data) => {
    try {
        const response = await axios.delete(`https://materiacriolla.onrender.com/checkout/${data}`,headers())
        storage.remove({ key: 'user' });
        await storage.save({key:'user',data:{user:response.data.response.user}})
        return {
            user:response.data.response.user,
            message:response.data.message
        }
    } catch (error) {
        console.log(error);
        return{message:error.response.data.message}
    }
})

const updateCheckout = createAsyncThunk('updateCheckout', async (data) => {
    let userStorage=JSON.parse(localStorage.getItem('user'))
    try {
        const response = await axios.put(`https://materiacriolla.onrender.com/checkout/${userStorage._id}`,data,headers())
        storage.remove({ key: 'user' });
        await storage.save({key:'user',data:{user:response.data.response.user}})
        return {
            user:response.data.response.user,
            message:response.data.message
        }
    } catch (error) {
        console.log(error)
        return{message:error.response.data.message}

    }
})

const checkoutActions={addCheckout,deleteCheckout,updateCheckout}
export default checkoutActions
