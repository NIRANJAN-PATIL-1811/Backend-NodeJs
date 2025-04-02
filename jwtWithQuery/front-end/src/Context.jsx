import { createContext } from "react";

export const Mycontext = createContext();

function Context() {
  return (
    <>
      <Mycontext.Provider>
        
      </Mycontext.Provider>
    </>
  );
}

export default Context;