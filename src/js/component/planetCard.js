import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const PlanetCard = (props) => {
    const {store, actions} = useContext(Context)

    return (
        <div className="card">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${props.planet.uid}.jpg`} className="card-img-top" alt="..." style={{color:"yellow"}} />
            <div className="card-body">
                <h5 className="card-title">{props.planet.name}</h5>
                <Link 
                    to={`/planet/${props.planet.uid}`}
                    className="btn btn-success"
                    style={{color:"yellow"}}> 
                Details
                </Link>
                <button className="btn btn-warning ms-5"
                     onClick={()=>{
						actions.setFavorite(props.planet);
					}} style={{color:"yellow"}}>Favorite</button>
            </div>
        </div>
    )
}

export default PlanetCard