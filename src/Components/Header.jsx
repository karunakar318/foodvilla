import React, {useState} from "react";
import {Link }from "react-router-dom"
let Header=()=>{

    const [login,setLogin]=useState(true);
    console.log("in header")
    return <div className="header">
        <a href={"/"}><img src={"src/assets/images.png"} width={100} height={100}/></a>

        <ul>
            <li><Link to={"/"}>
                Home
            </Link></li>
            <li><Link to={"/about"}>
                About
            </Link></li>
            <li><Link to={"/contact"}>
                Contact
        </Link></li>


    </ul>
        <div>
            {(login) ? <button className={"button"} style={{height: 100}} onClick={()=>setLogin(false)} >login</button> :
                <button className={"button"} style={{height: 100}} onClick={()=>setLogin(true)}>logout</button>
            }

        </div>
    </div>
}
export default Header;