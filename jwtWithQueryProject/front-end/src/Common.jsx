import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";



function Common() {

  const [ statusCode1, changeStatusCode1 ] = useState({});
  const [ statusCode2, changeStatusCode2 ] = useState(null);

  const navigate = useNavigate();

  async function productFun(value) {
    await axios.post("http://localhost:8000/api/product", null, {
      headers : {
        Authorization : `Bearer ${Cookie.get('Access_token')}`
      }
    })
    .then(() => navigate(value))
    .catch((error) => {
      if (error.response) {
        changeStatusCode1(error.response.data);
        changeStatusCode2(error.response.status);
      }
    })
  }

  async function contactFun(value) {
    await axios.post("http://localhost:8000/api/contact", null, {
      headers : {
        Authorization : `Bearer ${Cookie.get('Access_token')}`
      }
    })
    .then(() => navigate(value))
    .catch((error) => {
      if (error.response) {
        changeStatusCode1(error.response.data);
        changeStatusCode2(error.response.status);
      }
    })
  }

  async function aboutFun(value) {
    await axios.post("http://localhost:8000/api/about", null, {
      headers : {
        Authorization : `Bearer ${Cookie.get('Access_token')}`
      }
    })
    .then(() => navigate(value))
    .catch((error) => {
      if (error.response) {
        changeStatusCode1(error.response.data);
        changeStatusCode2(error.response.status);
      }
    })
  }

  async function getAccessToken() {
    await axios.post("http://localhost:8000/api/getAccessToken", null, {
      headers : {
        Authorization : `Bearer ${Cookie.get('Refresh_token')}`
      }
    })
    .then((res) => {
      changeStatusCode1(res.data);
      Cookie.set('Access_token', res.data.ans, { expires : 5 / (60 * 60 * 24)});
    })
    .catch((error) => {
      if (error.response) {
        changeStatusCode1(res.response.data);
        changeStatusCode2(res.response.status);
      }
    })
  }

  useEffect(() => {
    if (statusCode2 == 401) {
      getAccessToken();
    }
  }, [statusCode2]);

  return (
    <>
      <div>
        <br />
        <br />
        <Link onClick={() => productFun('/product')}>Product</Link>
        <br />
        <br />

        <br />
        <br />
        <Link onClick={() => contactFun('/Contact')}>Contact</Link>
        <br />
        <br />


        <br />
        <br />
        <Link onClick={() => aboutFun('/About')}>About</Link>
        <br />
        <br />
      </div>
      
    </>
  )
}

export default Common;