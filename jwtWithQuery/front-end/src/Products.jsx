import axios from "axios";
import { useState, useEffect } from "react";

function Products() {

  const [ initialVal, changeVal ] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/products")
    .then((res) => changeVal(res.data))
    .then((err) => changeVal(err.data));
  }, []);

  return (
    <>
      <div>
        {
          initialVal ? <h1>{JSON.stringify(Object.values(initialVal)[0])}</h1> : <h1>Loading your data...</h1>
        }
      </div>
    </>
  );
}

export default Products;