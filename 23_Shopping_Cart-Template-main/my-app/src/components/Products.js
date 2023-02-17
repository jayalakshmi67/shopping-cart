import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "BMW",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn1KyQhvKqkQ7moTaR3rMva92AYFS5U1jOmQ&usqp=CAU",
    
    //  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "BENZ",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCn-aI4CSkOp_zWBh2kiaWr7U11Fe4SwkcGA&usqp=CAU",
    
      // "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 3,
    name: "JAGUVAR",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ27EmIcqY5v-wo6eQDj0ZLSPxQH16sp4Y0wA&usqp=CAU",
    
      // "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 4,
    name: "PORSCHE",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jLW_i0b5PwdUH7RW4-Jm151thbtABNjdoQ&usqp=CAU",
      // "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 5,
    name: "AUDI",
    imgURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5RUGfUzUbqQzjNK-WariXLfwSffvUbvsYA&usqp=CAU",
      // "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
