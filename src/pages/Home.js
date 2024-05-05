import { Productlist } from "../Components"
 export const Home = () => {
  const products= [{id:"1",name: "Sony-wired earphones" , price: "20",image: "/assets/images/1001.png"},
  {"id":"2", "name": "saurabh" , "price": "50","image":"/assets/images/1002.png"},
  {"id":"3", "name": "saurabh" , "price": "70","image":"/assets/images/1003.png"},
  {"id":"4", "name": "saurabh" , "price": "40","image":"/assets/images/1004.png"},
  {"id":"5", "name": "saurabh" , "price": "30","image":"/assets/images/1005.png"},
  {"id":"6", "name": "saurabh" , "price": "20","image":"/assets/images/1006.png"}]
  return (
    <section className="products">
      {products.map((product)=>(
        <Productlist key={product.id} listproduct = {product}/>
      ))}
    </section>
  )
}

