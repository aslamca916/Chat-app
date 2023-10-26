import React from "react"
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const NavbarShowHide = ({children}) =>{
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)
    useEffect(()=>{
        console.log("location:",location);
        if(location.pathname =="/"||location.pathname =="/login" || location.pathname =="/register" || location.pathname == "/register-success"){
            setShowNav(false)
        } else {
            setShowNav(true)
        }
    },[location])
    return(
        <div>
            {showNav && children}
        </div>
    )
}

export default NavbarShowHide