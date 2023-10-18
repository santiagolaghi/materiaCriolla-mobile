import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const payment = createAsyncThunk('pay', async (info) => {
    try {
        const response = await axios.post('https://materiacriolla.onrender.com/payment/create-order', info)
        console.log('Order created:', response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return { error: error.response.data }
    }
})

export default payment