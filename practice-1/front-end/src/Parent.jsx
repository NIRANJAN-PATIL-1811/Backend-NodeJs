import Child from "./Child.jsx";
import { useState } from "react";

function Parent() {
  let mydata = "hi this is me";

  const [initialVal, changeVal] = useState();

  function getData(myvalue) {
    changeVal(myvalue);
  };

  return (
    <>
      <Child mydata={mydata} getData={getData}/>
      <h1>This data is from child == {initialVal}</h1>
    </>
  );
}

export default Parent;