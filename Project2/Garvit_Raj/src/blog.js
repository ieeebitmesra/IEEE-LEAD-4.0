import React, { useState } from "react";

function Blog(){
    const [sub,SetSub]=useState([]);
    const [inputText,SubInput]=useState({
        head:"",
        text:""
    });
    function setText(event){
       const H=event.target.name;
       const T=event.target.value;
       SubInput((prevValue)=>{
          if(H==="heading"){
            return{
           head:T,
           text:prevValue.text
            };
          }else if(H==="textmat"){
            return{
             head:prevValue.head,
             text:T
            }
          }
       });
    }
    function subSet(){
     SetSub((prevValue)=>{
        return [...prevValue,inputText];
     })
     console.log(sub);
    }
    return (
        <>
        <div className="container" style={{paddingTop:25}}>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label" style={{color:"#008170"}}>Heading</label>
    <input name="heading" type="email" className="form-control" id="exampleFormControlInput1" style={{color:"white"}} onChange={setText} value={inputText.head} placeholder="Heading Today"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label" style={{color:"#008170"}}>Enter your Blog</label>
    <textarea name="textmat" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={setText} style={{color:"white"}} value={inputText.text}></textarea>
    <button type="button" class="btn btn-success" onClick={subSet} style={{paddingTop:10}} >Submit</button>
    <div style={{color:"white"}}>Response:<h1 style={{color:"#008170"}}> {inputText.head}</h1> <p style={{color:"#008170"}}>{inputText.text}</p></div>
  </div>
  </div>
  {sub.map((arr)=>{
    return(
        <div class="card" style={{width: 580}}>
  <div class="card-body" style={{borderStyle:"solid",borderColor:"white",width:350}}>
    <h5 class="card-title" style={{color:"#008170"}}>{arr.head}</h5>
    {/* <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
    <p class="card-text" style={{color:"white"}}>{arr.text}</p>
    
  </div>
</div>
    );
  })}
  </>);
}
export default Blog;