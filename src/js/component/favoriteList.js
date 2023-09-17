import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoriteList = (props) => {
  const { store } = useContext(Context);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>These are your favorites</h2>
      <ul>
        {store.favorites.map((element) => {
          return <li>{element.name}</li>;
        })}
      </ul>
    </div>
  );
};