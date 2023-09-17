import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const VehicleCard = (props) => {
    const {store, actions} = useContext(Context)

    return(
        <div className="card">
        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${props.vehicle.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.vehicle.name}</h5>
                <Link 
                    to={`/vehicle/${props.vehicle.uid}`}
                    className="btn btn-success"
                    style={{color:"yellow"}}> 
                Details
                </Link>
                <button className="btn btn-warning ms-5"
                     onClick={()=>{
						actions.setFavorite(props.vehicle);
					}} style={{color:"yellow"}}>Favorite</button>
        </div>
    </div>
    )
}

export default VehicleCard