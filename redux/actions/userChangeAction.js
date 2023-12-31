import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from '../../utils/asyncStorage';
const userChangeAction = createAsyncThunk('userAddress', async (data) => {
    let userStorage=await storage.load({key:'user'}) 
    userStorage=userStorage.user
    let tokenStorage= await storage.load({key:'token'}) 
    tokenStorage=tokenStorage.token
    let headers = { headers: { 'Authorization': `Bearer ${tokenStorage}` } }
    try {
        let updatedUser = await axios.put(`https://materiacriolla.onrender.com/auth/${userStorage._id}`,data,headers)
        storage.remove({ key: 'user' });
        await storage.save({key:'user',data:{user:updatedUser.data.response.user}})
        return {user:updatedUser.data.response.user,
        message:updatedUser.data.message}
    } catch (error) {
        return {error:error.response.data}
    }
})
export default userChangeAction