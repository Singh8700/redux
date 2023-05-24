import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import {Button} from "../../templates/Button"
import {useDispatch} from "react-redux"
import {add} from "../cart/cardSlice"

const API = "https://productlist.onrender.com/All_Produts"
import ProductsView from "./ProductsView"

const Products=()=>{
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(true);
  const [singlePro,setSinglePro]=useState();
  
  useEffect(()=>{
    const loadProduct = async (url) =>{
      const res = await axios.get(url);
      const datas = await res.data;
      setSinglePro(datas)
      setLoading(false)
    }
    loadProduct(API)
    
  },[])
  console.log(loading)
  const Wrapper= styled.section`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-wrap:wrap;
  margin: 2rem auto;
  .singleProducts{
    width:250px;
    height:350px;
    margin:5rem auto;
    padding:3rem 0;
    border:1px solid gray;
    img{
      width:80%;
      height:75%;
    }
    button{
      height:5rem;
      width:14rem;
    }
  }
  `
  if(loading){
    return <div> Items Is loading .....</div>
  }
  
  const datas = {
    products:singlePro,
    titles:"All Products",
    widths:"350px",
    heights:"auto",
    paddings:"2rem 3rem",
    btn:"AD"
  }
  return (
    <Wrapper>

      {loading?<div>items is Loading.......</div>:<ProductsView productsList={datas}/>
      }

    </Wrapper>
    )
}
export default Products