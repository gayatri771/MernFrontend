import { useState, useEffect } from "react";
import Card from './Card';

function Products({ searchquery }) {

  const [products, setproducts] = useState([]);

 useEffect(() => {

  fetch("https://dummyjson.com/products?limit=194")
  .then(res => res.json())
  .then(data => console.log(data.products));
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
              image={e.thumbnail}
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
