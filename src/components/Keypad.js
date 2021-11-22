// Code Keypad Component Here
import React from "react";

function Keypad (){
    function passChange(){
        console.log("Entering password...");
    };//end of handleChange function

    return (
    <input type="password" onChange={passChange}></input>
    );
};

export default Keypad