import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slice/ProductSlice";



export const store=configureStore({
    reducer:{
        product:ProductSlice
    }
})