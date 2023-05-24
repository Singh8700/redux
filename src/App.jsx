import {Routes,Route} from  "react-router-dom"
import {ThemeProvider} from "styled-components"
import {Provider} from "react-redux"
import Home from "./components/home/Home"
import Cart from "./components/cart/Cart"
import NavBar from "./components/nav/NavBar"
import store from "./components/store/Store"


console.log("wouldnx")
function App() {
const theme = {
  colors:{
   bg:"red"
  }
}
  return (
    <>
  <Provider store={store}>
    <ThemeProvider theme={theme}>

     <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
   
    </ThemeProvider>
   </Provider>
    </>
  )
}

export default App
