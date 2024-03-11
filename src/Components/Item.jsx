import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


function Item(){
    const [restro,setRestro]=useState({});
    let {id}=useParams();
    useEffect(()=>{
        getRestroinfo();
    },[])
    async function getRestroinfo(){
        let res=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        let data=await res.json();
        console.log(data);
        setRestro(data);
    }
    console.log(id)
    return <div>
        <h1>Restaraunt id:{id}</h1>
        <h1>{restro.data?.cards[0]?.card?.card?.info?.name}</h1>
        <img
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restro.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
        <h3>{restro.data?.cards[0]?.card?.card?.info?.area}</h3>
        <h3>{restro.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{restro.data?.cards[0]?.card?.card?.info.avgRating}</h3>
    </div>
}

export default Item;