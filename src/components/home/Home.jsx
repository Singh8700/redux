import styled from "styled-components"
import Products from "../products/Products"


const Home=()=>{
  const Wrapper= styled.section`
  width:100%;
  min-height:100%;
  padding:3rem 2rem;
  text-align:center;
  `;
  return (
  <Wrapper>
  <h1>WelCome to SinghStore Useing Redux librery</h1>
    <Products/>
  </Wrapper>
    )
}
export default Home