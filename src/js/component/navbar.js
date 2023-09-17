import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/swlogo.png"

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-black mb-3" style={{backgroundColor:""}}>
			<Link to="/">
				<img className="navbar_img ms-5" src={logo} width={100}></img>
			</Link>

			<div className="btn-group dropstart me-5"> 
			
				<Link to={"/favorite"} className="btn btn-warning" style={{color:"white"}}>Favoritos ({store.favorites.length})</Link>
			</div>
				
		</nav>
	);
};