import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App.js" ;
import App2 from "./App2.js";

function AppParent(){
    return(<>
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/blog" element={<App2/>}/>
      </Routes>
      </BrowserRouter>
    </>)
}

export default AppParent;