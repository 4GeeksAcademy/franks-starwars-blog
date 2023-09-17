import React, {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CharacterCard from "../component/characterCard";
import PlanetCard from "../component/planetCard";
import VehicleCard from "../component/vehicleCard";

export const Home = () => {
	const {store} = useContext(Context)
	return ( 	
		<div className="container">
			
			<div className="row mb-4">
				<h2 className="text" style={{color:"yellow"}}>Characters</h2>
				<div className="row text-center flex-row flex-nowrap overflow-auto carrousel">
					{store.characters.map((character, index)=> {
						return (
							<div className="col-12 col-md-3" key={index}>
								<CharacterCard character={character}/>
							</div>
						)
					})}
				</div>

			</div>

			<div className="row mb-4">
				<h2 className="text" style={{color:"yellow"}}>Planets</h2>
				<div className="row text-center flex-row flex-nowrap overflow-auto carrousel">
					{store.planets.map((planet,index)=>{
						return (
							<div className="col-12 col-md-3" key={index}>
								<PlanetCard planet={planet} />
							</div>
						)
					})}
				</div>
				
			</div>

			<div className="row">
				<h2 className="text" style={{color:"yellow"}}>Vehicles</h2>
				<div className="row text-center flex-row flex-nowrap overflow-auto carrousel">
					{store.vehicles.map((vehicle,index)=>{
						return (
							<div className="col-12 col-md-3" key={index}>
							<VehicleCard vehicle={vehicle}/>
							</div>
						)
					})}
				</div>
			</div>
		</div>		
	)
};