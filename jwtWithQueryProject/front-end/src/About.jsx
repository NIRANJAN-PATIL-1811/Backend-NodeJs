import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const backFun = () => {
    navigate('/common');
  };

  return (
    <>
      <h1>You clicked on About</h1>
      <button onClick={() => backFun()}>Back</button>
    </>
  );
}

export default About;