import './Restrocard.css'
function Restrocard({name,cloudinaryImageId,areaName}){

    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h2>{areaName}</h2>
        </div>
    )
}
export default Restrocard;