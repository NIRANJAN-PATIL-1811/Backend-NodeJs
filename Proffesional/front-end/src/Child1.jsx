import axios from 'axios';
import Cookie from "js-cookie";
import { useEffect, useState } from 'react';

function Child1() {

  const [ initialVal, changeVal ] = useState({});

  // useEffect(() => {
  //   axios.get('/get_token')
  //   .then((res) => {
  //     const token = res.data.ans;
  //     changeVal(token)
  //     console.log(typeof token);
  //     Cookie.set('my_token', token, { expires : (1 / 1440) })
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <h1>This is sample</h1>
    </>
  );
}

export default Child1;