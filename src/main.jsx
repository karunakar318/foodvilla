import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import About from "./Components/About.jsx";
import Error from "./Components/Error.jsx";
import Contact from "./Components/Contact.jsx";
import Item from "./Components/Item.jsx";



let Applayout = () => {
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
let Approuter=createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        errorElement:<Error/>,
        children:[{
            path:'/about',
            element:<About/>
        },{
            path:'/',
            element:<Body/>
        },{
            path:'/contact',
            element:<Contact/>
        }]

    },
    {
        path:'Restro/:id',
        element:<Item/>
    }
])
{
    console.log(Approuter+" hello")
}
let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={Approuter}/>
    </React.StrictMode>,
)
