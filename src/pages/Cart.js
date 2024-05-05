import { Cartlist } from "../Components"
import { useCart } from "../CartContext/CartContext"

export const Cart = () => {
  const {total,Cartlistitem} = useCart()
  const products= [{id:"1",name: "Sony-wired earphones" , price: "20",image: "/assets/images/1001.png"},
  {"id":"2", "name": "saurabh" , "price": "50","image":"/assets/images/1002.png"},
  {"id":"3", "name": "saurabh" , "price": "70","image":"/assets/images/1003.png"},]
  return (
    <div className="Cart">
      <h2> Cart items : {products.length} /${total} </h2>
      {Cartlistitem.map((product)=>(
        <Cartlist key={product.id} Cartlistproduct={product}/>
      ))}
    </div>
  )
}


