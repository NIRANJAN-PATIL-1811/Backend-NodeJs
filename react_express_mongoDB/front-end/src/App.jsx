import { useState, useRef } from "react";
import axios from "axios";


function App() {
  
  const [ initialVal, changeVal ] = useState('');

  const full_name = useRef();
  const email = useRef();
  const age = useRef();

  async function sendData(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/post", {full_name : full_name.current.value, email : email.current.value, age : age.current.value})
      .then((res) => changeVal(res.data.msg))
      .catch((error) => console.log(error)); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>

        <form onSubmit={sendData}>
          <label htmlFor="full_name">Name</label>
          <input ref={full_name} type="text" name="full_name" placeholder="Full name" />
          <br />

          <label htmlFor="email">Email</label>
          <input ref={email} type="text" name="email" placeholder="Email" />
          <br />

          <label htmlFor="age">Age</label>
          <input ref={age} type="text" name="age" placeholder="Age" />
          <br />

          <button type="submit">Save</button>  
        </form>        

        {
          initialVal != "" ? <h1>{initialVal}</h1> : null
        }
      </div>
    </>
  );
}


export default App;