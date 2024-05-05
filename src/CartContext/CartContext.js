import { createContext, useContext } from "react"
import { useReducer } from "react"
import { cartReducer } from "../cartReducer/cartReducer"


const initailstate = {
    total: 0,
    Cartlistitem: []
}
const CartContext = createContext(initailstate)

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initailstate);

    const addToCart = (listproduct) => {
        const updatedList = state.Cartlistitem.concat(listproduct);
        Price(updatedList)
        console.log(updatedList)
        dispatch({ 
                   type: 'ADD_TO_CART',
                   payload: { products: updatedList 
                } 
            });

    };
    const Removefromcart= (product)=>{
        console.log(state.Cartlistitem)
       const Updatedmovelist = state.Cartlistitem.filter((item)=> product.id !== item.id)
       console.log(Updatedmovelist)
       Price(Updatedmovelist)
       dispatch({
        type: 'REMOVE_CART',
        payload:{products:Updatedmovelist}
       })
    }
    const Price =(product)=>{
        let total = 0
       product.forEach(element => {
         total = (+total) + (+element.price)
        });
        dispatch({
            type:'TOTAL',
            payload :{
                total
            }
        })
    }
    const value = {
        total: state.total,
        Cartlistitem: state.Cartlistitem,
        addToCart,
        Removefromcart,
        Price
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const Context = useContext(CartContext);
    return Context
}