import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const CharacterCard = (props) => {
	const {store, actions} = useContext(Context)

	return ( 	
		<div className="card">
			<img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="card-title" style={{marginBottom:""}}>{props.character.name}</h5>
					<Link 
						to={`/character/${props.character.uid}`}
						className="btn btn-success" style={{color:"yellow"}}
					> 
					Details 
					</Link>
					<button className="btn btn-warning ms-5" onClick={()=>{
						actions.setFavorite(props.character);
					}} style={{color:"yellow"}}>Favorite</button>
			</div>
		</div>
	)
}

export default CharacterCard