import { Link } from  "react-router-dom"
//import Home from "../home/Home"
//import Cart from "../cart/Cart"
import styled from "styled-components"
import {useSelector} from "react-redux"
const NavBar=()=>{
  const items = useSelector((state)=>state.cart)
  console.log(items);
  const Wrapper = styled.section`
  width:100vw;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  background:gray;
  font-weight:bold;
  font-family: Georgia;
  font-size:2rem;
  position:sticky;
  text-align:center;
  overflow-x: hidden;
  top:0;
  left:0;
  z-index:999;
  .logo{
    font-size:3rem;
    width:350px;
  }
  .nav{
  width:500px;
  display:flex;
  justify-content:space-around;
  align-items:center;
  a{
    color:#fff;
    font-size:2.5rem;
   &:hover,&:active{
    color:#0af;
    font-size:2.8rem;
  }
  }
  }
  `;
  return (
    <Wrapper>
    <span className="logo">SinghShop Demo</span>
    <div className="nav">
    <Link calssName="navLink" to="/">Home</Link>
    <Link calssName="navLink" to="/cart">Cart</Link>
    <span calssName="cartCounter">
      Cart item: {items.length}
    </span>
    </div>
    </Wrapper>
    )
}


export default NavBar