import React, {useEffect, useState} from "react";
import Restrocard from "./Restrocard.jsx";
import Shim from "./Shim.jsx";
import {Link} from "react-router-dom";
import Item from "./Item.jsx";
function filterdata(search, restro) {
    return restro.filter((card)=>{
        return card.info.name.toLowerCase().includes(search.toLowerCase());
    })
}
let Body = () => {

    let [search,setsearch]=useState("");
    let [filrestro,setfilrestro]=useState([]);
    let [restro,setrestro]=useState([]);
    async function getrestro(){
        const res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data=await res.json();
        console.log(data)
        setrestro(data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilrestro(data?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    }
    useEffect(()=>{

        getrestro()
    },[])
    
    if(restro.length===0 && filrestro.length!==0) {
        return <>
            <div className="search-container">
                <input type={"text"} placeholder={"search"} value={search} onChange={(e) => {
                    setsearch(e.target.value)

                }}/>

                <button onClick={() => {
                    const data = filterdata(search, filrestro);
                    setrestro(data);
                }}>search
                </button>
            </div>
            <h1>no item found</h1>
        </>

    }


    return (restro.length === 0) ? <Shim/> : (
        <>
            <div className="search-container">
                <input type={"text"} placeholder={"search"} value={search} onChange={(e) => {
                    setsearch(e.target.value)

                }}/>

                <button onClick={() => {
                    const data =filterdata(search,filrestro);
                    setrestro(data);
                }}>search</button>
            </div>
            <div>
                {restro.map((i) => {

                    return <Link to={'/Restro/'+i.info.id}><Restrocard {...i.info} key={i.info.id}/></Link>
                })}
            </div>
        </>)
}
export default Body;