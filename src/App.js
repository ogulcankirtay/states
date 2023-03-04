import { useState } from "react";


function App() {
  const [name,setName]=useState("Oğulcan");
  const [age,setAge]=useState(23);
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <button onClick={()=>{setName("Kırtay")}}>Change Name</button>
      <button onClick={()=>setAge(age+1)}>Change Age</button>
    </div>
  );
}

export default App;
