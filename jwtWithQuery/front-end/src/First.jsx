import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";

function First() {

  const usenavigate = useNavigate();

  const [ initialSearch, changeSearch ] = useSearchParams();

  // JSON.stringify(Object.values(initialVal)[0])

  const email = useRef();
  const pass = useRef();

  const [ initialVal, changeVal ] = useState({});

  // if (initialVal) {
  //   console.log(typeof JSON.stringify(initialVal['userToken'], null, 2));
  //   console.log(initialVal['userToken']);
  // }

  
  async function postData (e) {
    e.preventDefault();

    await axios.post("http://localhost:8000/", { email : email.current.value, pass : pass.current.value })
    .then((res) => changeVal(res.data))
    .catch((error) => changeVal(error))
  }


  if (initialVal) {
    useEffect(() => {
      changeSearch({email : email.current.value, pass : pass.current.value, token : JSON.stringify(Object.values(initialVal)[0])});
    }, [initialVal]);
  }

  return (
    <>
      <form onSubmit={(e) => postData(e)}>
        <input ref={email} type="text" placeholder="Enter your email" />
        <br />
        <input ref={pass} type="text" placeholder="Enter your pass" />
        <br />
        <button>Submit</button>
        <br />
      </form>

      <button onClick={() => usenavigate('/')}>Reset</button>

      <div>
        {
          initialVal ? <h1>{initialVal['userToken']}</h1> : <h1>Loading...</h1>
        }
      </div>
    </>
  );
}

export default First;