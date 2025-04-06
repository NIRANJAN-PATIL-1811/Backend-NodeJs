import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

function First() {

  const usenavigate = useNavigate();

  // const [ initialSearch, changeSearch ] = useSearchParams();

  // JSON.stringify(Object.values(initialVal)[0])

  const email = useRef();
  const pass = useRef();

  const [ initialVal, changeVal ] = useState({});
  const [ initialVal2, changeVal2 ] = useState({});

  // if (initialVal) {
  //   console.log(typeof JSON.stringify(initialVal['userToken'], null, 2));
  //   console.log(initialVal['userToken']);
  // }

  
  async function postData (e) {
    e.preventDefault();

    await axios.post("http://localhost:8000/", { email : email.current.value, pass : pass.current.value })
    .then((res) => changeVal(res.data))
    .catch((error) => changeVal(error.data))
  }

  if (initialVal) {
    useEffect(() => {
      if (email.current.value != '' || pass.current.value != '', initialVal.msg != undefined) {
        // changeSearch({email : email.current.value, pass : pass.current.value, token : initialVal.msg});
        // window.sessionStorage.setItem('Access_Token', initialVal.msg);
        Cookie.set('Access_Token', initialVal.msg, {expires : 1});
      }
    }, [initialVal]);
  }

  function getAns() {
    axios.post("http://localhost:8000/products", null, {
      headers : {
        Authorization : `Bearer ${initialVal.msg}`
      }
    })
    .then((res) => changeVal2(res.data))
    .catch((error) => changeVal2(error.data));

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
      <br />
      <button onClick={() => getAns()}>Get Ans</button>

      <div>
        {
          initialVal2.msg ? <><h1>{initialVal2.msg}</h1> <h1>{Cookie.get('Access_Token')}</h1></> : <h1>Loading...</h1>
        }
      </div>
    </>
  );
}

export default First;