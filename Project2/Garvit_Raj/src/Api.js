import React, { useEffect, useState } from "react";

function Api({trv,count}){
    const [data,getResult]=useState([]);
    const getApi=async()=>{
        const url = `https://newsi-api.p.rapidapi.com/api/category?category=${trv}&language=en&country=${count}&sort=top&page=1&limit=20`;
         const options = {
	    method: 'GET',
	    headers: {
		      'X-RapidAPI-Key': '4e94616974msh5fc10e6d99ed098p133f2djsn87bcfe93fab2',
		      'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
	     }
};

try {
	const response = await fetch(url, options);
	const result=await response.json();
    getResult(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
    }
    useEffect(()=>{
        getApi();
    },[trv,count]);
    const im="https://www.shutterstock.com/image-vector/breaking-news-live-banner-on-260nw-655085215.jpg";
    return(<>
        <div className="component">
            {data.map((arr,id)=>{
               return(
                <>
                <div class="card">
                <div class="wrapper">
  <img src={arr.image===""?im:arr.image} class="card-img-top" alt="..."/>
  <div className="info"><p>{arr.title}</p></div>
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">{arr.title}</p>
    
    <a href={arr.link} class="btn btn-success">Go somewhere</a>
  </div>
</div>
                </>
               );
            })}
        </div>
    </>);
}

export default Api;