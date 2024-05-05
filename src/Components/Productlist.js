import { useEffect, useState } from "react"
import { useCart } from "../CartContext/CartContext"
export const Productlist = ({listproduct}) => {
   const  {id,name,price,image} = listproduct
   const [checkproduct,setcheckproduct] = useState(false)
   const {addToCart,Cartlistitem,Removefromcart} = useCart()
   async function Handlecart(){
       await addToCart(listproduct)
      //  console.log(Cartlistitem)
   }
  useEffect(()=>{
    const Productisin = Cartlistitem.find(element => element.id === id)
  
    if(Productisin){
      setcheckproduct(true)
    }
    else{
      setcheckproduct(false)
    }
  },[Cartlistitem,id])
  return (
    <div className="Productlist">
      <img src ={image} alt="logo" className="logo"/>
      <div className="Product-info">
        <h2>{name}</h2>
        <div>
          <p>${price}</p>
          {checkproduct ? <button onClick={()=>Removefromcart(listproduct)}>remove</button>:<button onClick={Handlecart}>add to cart</button>}
        </div>
      </div>
    </div>
  )
}


