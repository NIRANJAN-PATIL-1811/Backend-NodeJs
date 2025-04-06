import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const backFun = () => {
    navigate('/common');
  };

  return (
    <>
      <h1>You clicked on Product</h1>
      <button onClick={() => backFun()}>Back</button>
    </>
  );
}

export default Product;