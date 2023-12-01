import React from "react";
import "./index.css";



function Card(Props){

    return(
    <div className="content">

        <div className="column">
        <div className="card">
          <a href={Props.Url}>
         <img className="image" src={Props.Imgsrc}/>
         </a>
         <h2>{Props.Title}</h2>

        </div>
        
      </div>
    </div>
    );
}

export default Card;





