import React from "react";
import  PersonalRun from "./personal";
import myGif from './img-solaire.gif'
 
const Show = () =>{
    return(
        <div>
            <PersonalRun />
            <div> <img src={myGif} style={{display: 'block', margin: 'auto'}}></img></div>
        </div>
        
    )
}
export default Show;