import {Button} from "../../templates/Button"
import styled from "styled-components"
import {useDispatch} from "react-redux"
import {add} from "../cart/cardSlice"
import {remove} from "../cart/cardSlice"
import FormatPrice from "../Helpers/FormatPrice"
const ProductsView =({ productsList })=>{
  const {products,btn, titles,widths,heights,paddings} = productsList
  const dispatch = useDispatch()
const Wrapper= styled.section`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  margin: 2rem auto;
  .productsTitle{
    width:100%;
    text-align:center;
    font-size:3rem;
    flex-direction:column;
  }
  .singleProducts{
    width:${widths};
    height:${heights};
   {/* background:blue;*/}
    margin: 2rem auto;
    padding:${paddings};
    display:flex;
   justify-content:space-around;
   align-items:center;
   flex-wrap:wrap;
    border:1px solid gray;
    text-align:center;
    .productDetails{
      word-break:all;
      width:300px;
      height:100%;
      margin:auto;
      text-align: centre;
      overflow:hidden;
      p{
        text-align:left;
        padding:4rem 0;
      }
    }
    .price{
      width:300px;
      font-size:2rem;
    }
    img{
      width:300px;
      height:250px;
    }
  }
 
  `
  const AddCartHandler=(pro)=>{
    console.log(pro);
   dispatch(add(pro))
  }
  const RemoverHandler=(pro)=>{
    console.log(pro)
    dispatch(remove(pro))
  }
  return (
    <Wrapper>
    <div className="productsTitle">
    <h2>{titles}</h2>
    </div>
    {
      products.map((item)=>{
          return(
       <div className="singleProducts" key={item.id} id={item.id}>
          <img src={item.image}/>
          <div className="productDetails">
          <h1>{item.name}{item.title}</h1>
          {btn=="RM"?<p>{item.description}</p>:<span></span>}
          <span className="price">Price : <FormatPrice price={item.price}/>
          </span>
          </div>
          <div className="btns">
          {btn=="RM"?<Button onClick={()=>RemoverHandler(item.id)}>Remover</Button>:<Button onClick={()=>AddCartHandler(item)}>Add To Cart</Button>}
          </div>
       </div>
          )
        })
    }
    
    </Wrapper>
    )
}

export default ProductsView