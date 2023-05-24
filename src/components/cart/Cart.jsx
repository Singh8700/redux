import styled from "styled-components"
import {useSelector} from "react-redux"
import ProductsView from "../products/ProductsView" 
import {Button} from "../../templates/Button"


const Cart=()=>{
  const product= useSelector((state)=> state.cart)
  const datas = {
    products:product,
    titles:'Cart',
    widths:"100%",
    heights:(window.innerWidth<=790)?"auto":"300px",
    paddings:(window.innerWidth<=790)?"3rem 2rem":"2rem 4rem",
    btn:"RM"
  }

  return (
    <>
    <ProductsView productsList={datas}/>
    </>
    )
}
export default Cart