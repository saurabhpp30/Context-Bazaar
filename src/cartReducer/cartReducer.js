
export const cartReducer = (state,action) => {
 const  {type,payload} = action;
  switch(type){
    case 'ADD_TO_CART':
        console.log(payload.products)
      return {...state,Cartlistitem:payload.products}

    case "REMOVE_CART":
       return {...state,Cartlistitem:payload.products}

    case 'TOTAL':
        return {...state,total:payload.total}
 

    default :
       throw new Error("no case found in card")
  }
    
}