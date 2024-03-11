import {useRouteError} from "react-router-dom"
function Error(){
    const err=useRouteError();
    console.log(err);
    return <>
        <h1>Oops</h1>
        <h1>Something went wrong</h1>
        <h1>{err.status+" "+err.statusText}</h1>
    </>
}
export default Error;