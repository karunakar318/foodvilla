import React from "react";

let Shim=()=>{
    return <>
        <div>
            {
                Array(10).fill("").map((e,index) => <div key={index} className={"shim-car"} > </div>)
            }

        </div>
    </>
}
export default Shim;