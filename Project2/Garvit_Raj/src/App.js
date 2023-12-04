import React,{useState} from "react";
import Navbar from "./Navbar";
import Api from "./Api";
function App(){

    const [trv,setTrv]=useState(`world`);
  const [count,setCount]=useState(`in`);
  
   function handle(){
    setTrv(`sport`);
   }
  function setHome(){
    setTrv(`world`);
  }
  function setTravel(){
    setTrv(`travel`);
  }
  function setWorld(){
    setTrv(`world`);
  }
  function setEntertainment(){
    setTrv(`entertainment`);
  }
  function setBusiness(){
    setTrv(`business`);
  }
  function setScience(){
    setTrv(`science_and_technology`);
    
  }
  function setEducation(){
    setTrv(`education`);
  }
  function setHealth(){
    setTrv(`health`);
  }
  function setIndia(){
    setCount(`in`);
  }
  function setUS(){
    setCount(`us`);
  }
    return(
     <>
        <Navbar handle={handle}
                setHome={setHome}
                setTravel={setTravel}
                setWorld={setWorld}
                setEntertainment={setEntertainment}
                setBusiness={setBusiness}
                setScience={setScience}
                setEducation={setEducation}
                setHealth={setHealth}
                setIndia={setIndia}
                setUS={setUS} />
        <Api trv={trv}
             count={count}/>
     </>
    );
}
export default App;