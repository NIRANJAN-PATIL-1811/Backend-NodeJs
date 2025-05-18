import Parent from "./Parent.jsx";

function App() {

  for (let i = 5; i > 0; i--) {
    
    setTimeout(() => {
      console.log("hi");
    }, 1000);
    
  } 

  return (
    <>
      {/* <Parent/> */}
    </>
  );
}

export default App;