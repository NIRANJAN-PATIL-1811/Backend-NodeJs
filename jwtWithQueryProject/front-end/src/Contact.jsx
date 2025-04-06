import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const backFun = () => {
    navigate('/common');
  };

  return (
    <>
      <h1>You clicked on Contact</h1>
      <button onClick={() => backFun()}>Back</button>
    </>
  );
}

export default Contact;