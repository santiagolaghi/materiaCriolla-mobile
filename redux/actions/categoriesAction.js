import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const categ = createAsyncThunk('getCateg', async () => {
    try {
        const response = await axios.get('https://materiacriolla.onrender.com/categories')
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return { error }
    }
})

export default categ