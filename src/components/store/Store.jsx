
import { configureStore } from "@reduxjs/toolkit" 
import cardReducer from "../cart/cardSlice"

const store = configureStore({
  reducer : {
    cart : cardReducer,
  }
})


export default store