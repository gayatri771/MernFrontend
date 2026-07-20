import { useState, useEffect } from "react";
import Card from './Card';

function Products({ searchquery }) {

  const [products, setproducts] = useState([]);

 useEffect(() => {

  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setproducts(data))
    .catch(error => console.log(error))

}, [])


  let filteredproducts = products.filter((p) => {
    return p.title
      .toLowerCase()
      .includes(searchquery.toLowerCase());
  });

  return (
    <>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}
    >
      {
        filteredproducts.map((e) => {
          return (
            <Card
              image={e.image}
              title={e.title}
              price={e.price}
            />
          );
        })
      }
    </div>
    </>
  );
}

export default Products;
