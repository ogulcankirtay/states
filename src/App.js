import { useState } from "react";


function App() {
  const [name,setName]=useState("Oğulcan");
  const [age,setAge]=useState(23);
  const [firends,setFirends]=useState(["Serkan","Çağlar"])
  const [adress,setAdress]=useState({title:"Konya",zip:42310})
  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
      <button onClick={()=>{setName("Kırtay")}}>Change Name</button>
      <button onClick={()=>setAge(age+1)}>Change Age</button>
    
    <hr />
    <br />
    <h1>Firends</h1>
    {
    firends.map((firend,i)=>(
      <div key={i}>{firend}</div>
    ))
    }
    
 <button onClick={()=>setFirends(["X",...firends])}>Add Firends</button>
   
   <br />
   <hr />
   <h1>Adress</h1>
   <div>{adress.title} {adress.zip}</div>

   <button onClick={()=>setAdress({...adress,title:"Ankara"})}>Change Adress</button>
    </div>
    
  );
}

export default App;
