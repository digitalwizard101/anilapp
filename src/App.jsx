import React from "react";
import User from "./components/User";
import { Member } from "./components/Member";
import { Chamber } from "./components/Chamber";

const App = () => {

const myFunc=()=>{
  alert("Hello From App")
}

  return (
    <div align="center">
     <Chamber  dada={myFunc} />
     <Member bata={myFunc}/>
    </div>
  );
};

export default App;
