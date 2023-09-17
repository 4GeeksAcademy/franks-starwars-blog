const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],

			character: null,
			planet: null,
			vehicle: null,

			favorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

		
		/* Load characters, planets & vehicles */

			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((res) => res.json())
					.then((response) => {
						console.log(response);
						setStore({characters: response.results})
					});
			},
			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then((response) => {
						console.log(response);
						setStore({planets: response.results})
					});
			},
			loadVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then((response) =>{
						console.log(response);
						setStore({vehicles: response.results})
					});
              
			},

		
			/* Get characters, planets & vehicles */
			getCharacter: (uid) => {
				//fetch("https://www.swapi.tech/api/people/" + id)
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(res => res.json())
					.then((response) =>{
						console.log(response);
						setStore({character: response.result.properties})
					});
			},

			getPlanet: (uid) => {
				//fetch("https://www.swapi.tech/api/planets/" + id)
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(res => res.json())
					.then((response) =>{
						console.log(response);
						setStore({planet: response.result.properties})
					});
			},

			getVehicle: (uid) => {
				//fetch("https://www.swapi.tech/api/vehicles/" + id)
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(res => res.json())
					.then((response) =>{
						console.log(response);
						setStore({vehicle: response.result.properties})
					});
			},

			setFavorite: (element) => {
				const store = getStore();
				// store.favorite = ["character 1"]
				if(!store.favorites.includes(element)) {
					setStore ({favorites : [...store.favorites, element]})
				}
				
				// setStore({favorites: [...store.favorites, element]});
			},
			
		},
	};
};

export default getState;