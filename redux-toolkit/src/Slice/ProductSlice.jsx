import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = { data: [] }

// First, create the thunk
export const fetchUserById = createAsyncThunk(
    'product/fetchByIdStatus',
    async (thunkAPI) => {
      const {data} = await axios.get("https://dummyjson.com/products")
       return  data.products
    }
  )

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment(state) {
       return state
    },
  },
  extraReducers : (builder)=>{
      builder.addCase(fetchUserById.fulfilled,(state,action)=>{
        state.data=action.payload
      })
  }
})

export const { increment} = ProductSlice.actions
export default ProductSlice.reducer