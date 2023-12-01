import React from "react";
import Card from "./Card";




function Netcards(val){
    return(
    <Card 
    key={val.id}
    Imgsrc={val.Imgsrc}
    Title={val.Title}
    Url={val.Url}
    /> 
    )
 };

export default Netcards;