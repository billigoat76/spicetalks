
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
export const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        user : userReducer
    }
});

