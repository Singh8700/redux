#create Redux app 
#first we install the redux library && #redux tool in react project
#using this code : 


npm install --save react-redux

npm install --save-dev redux-devtools

#after the installation go to our project & create the slice using the :


createSlice in redux

#for example is :
#first import createSlice method in redux library 


import { createSlice } from '@reduxjs/toolkit'


#create the slice

const CreateSlicer = createSlice(

#createSlice in work the object method 


{
#name of the slice


  name:"cart",
#initialState 


  initialState:[],
#reducers


  reducers:{
    /*create your method in reducers*/
    
    add(state,action){
    
      #return statement 
    }
    
    #second reducer create here
    
    remove(state,action){
       #return statement 
    }
  }
})

#after declaration the CreateSlicer we need to export the actions using this code 

export const { add, remove }  = cardSlice.actions

#after export action we need to export CreateSlicer using this code
export default CreateSlice.reducer


#than after export both actions+reducer we need to create a store configuration
#using this code 

#first import the configureStore in reduxjs<br>

import { configureStore } from "@reduxjs/toolkit" 

#than also import our created CreateSlice<br>

import cardReducer from "../cart/cardSlice"

#than create a store variable & assign the configureStore method

const store = configureStore(

#configureStore method also work the object form
<br>

{
#we calling the our created reducer 
  reducer : {
  #your declare any name 
  #after name assign the previous CreateSlice
    cart : CreateSlice,
  }
})
<br>
#end the last we also export this file
export default store

#now this time we used redux in our projects

#but first calling the Provider method in reduxjs
#import Provider in app.jsx file

import {Provider} from "react-redux"

#also import store configuration in app.jsx file

import store from "./components/store/Store"

#than wrap the all Components in Provider

  <Provider store={store}>
    #App components 
  </Provider>

#now we create the useDispath method to calling the reducers

import {useDispatch} from "react-redux"

import {add} from "../cart/cardSlice"

import {remove} from "../cart/cardSlice"


#after importing we create the variable to store the useDispacth method

const dispatch = useDispatch()

#now times to go dispatch our method
const AddCartHandler=(pro)=>{
    console.log(pro);
   dispatch(add(pro))
  }

#now get the store values we need to import useSelector method in reduxjs

import {useSelector} from "react-redux"

#after importing we need to create a variable to store Data

const product= useSelector((state)=> /*state.CreateSlice name declare.name*/ state.cart)

#finally  we get all store date & you used anywhere - anytime 




