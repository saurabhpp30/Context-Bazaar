import { useCart } from "../CartContext/CartContext"

export const Cartlist = ({ Cartlistproduct }) => {
    const { name, price, image } = Cartlistproduct
    const {Removefromcart} = useCart()
   
    return (
        <div className="Cart-List">
            <img src={image} alt="logo" className="logo" />
            <h4>{name} </h4>
            <div>
                <p>${price}</p>
                <button onClick={()=>Removefromcart(Cartlistproduct)}>remove</button>
            </div>
        </div>
    )
}


