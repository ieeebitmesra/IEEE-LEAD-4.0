import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

function Navbar({handle,setHome,setTravel,setWorld,setEntertainment,setBusiness,setScience,setEducation,setHealth,setIndia,setUS}){
    return(
    <div>
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">NewsDaily</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/" onClick={()=>setHome()}>Home</Link>
          </li>
          <li class="nav-item">
            <Link className="setter nav-link" to="/blog">Blog</Link>
          </li>


          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Country
            </a>
            <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={()=>setIndia()} style={{color:"#008170"}}>india</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setUS()} style={{color:"#008170"}}>usa</a></li>
            <li><hr className="dropdown-divider"/></li>
            </ul>
          </li>



          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={()=>handle()} style={{color:"#008170"}}>Sports</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setTravel()} style={{color:"#008170"}}>Travel</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setWorld()} style={{color:"#008170"}}>World</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setEntertainment()} style={{color:"#008170"}}>Entertainment</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setBusiness()} style={{color:"#008170"}}>Business</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setScience()} style={{color:"#008170"}}>Science-Tech</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setEducation()} style={{color:"#008170"}}>Education</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setHealth()} style={{color:"#008170"}}>Health</a></li>
            </ul>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
    );
}
export default Navbar;