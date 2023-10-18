import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const register = createAsyncThunk('register', async (info) => {
    try {
        const response = await axios.post('https://materiacriolla.onrender.com/auth/register', info)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error.response)
        return {
            error:error.response.data
        }
    }
})

export default register