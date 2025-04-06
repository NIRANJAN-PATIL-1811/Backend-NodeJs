import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";

function Login() {

  const [ initialVal, changeVal ] = useState({});
  const [ statusCode, changeStatusCode ] = useState(null);

  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  

  const loginFun = async () => {
    await axios.post('http://localhost:8000/api/login_request', {
      email : email.current.value,
      password : password.current.value
    })
    .then((res) => {
      changeVal(res.data);
      changeStatusCode(res.status);
    })
    .catch((error) => {
      if (error.response) {
        changeVal(error.response.data);
        changeStatusCode(error.response.status);
      }
      
    });
  };

  useEffect(() => {
    if (statusCode == 200) {      
      Cookie.set('Access_token', initialVal.access_token, { expires : 5 / (60 * 60 * 24)});
      Cookie.set('Refresh_token', initialVal.refresh_token, { expires : 1});
      navigate('/common');
    }
  }, [statusCode]);  

  return (
    <>
      <center>
        <br />
        <br />
        <label htmlFor="email">Email </label>
        <input ref={email} type="text" placeholder="Email" />
        <br />
        <br />
        <label htmlFor="pass">Password </label>
        <input ref={password} type="text" placeholder="Password" />
        <br />
        <br />
        <button onClick={() => loginFun()}>Login</button>
        <br />
        <br />
      </center>

      {
        statusCode == 400 ? <h1>{initialVal.msg}</h1> : null
      }
    </>
  );
}

export default Login;