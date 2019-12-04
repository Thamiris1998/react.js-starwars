import React from "react";
import "../App.css";
import planetRotateImage from "../images/rotate-planet.gif";

const Planet = ({ planet }) => {
  return (
<div className="card mb-3 App-width-card-planet">
      <div className="card-header App-align-center">
        <img src={planetRotateImage} className="App-logo" alt="logo" /> {planet.name}
      </div>
      <div className="card-body">
        <div className="row">
          <h5 className="col-3 card-title">POPULATION:</h5>
          <p className="col card-text">{planet.population}</p>
        </div>
        <div className="row">
          <h5 className="col-3 card-title">CLIMATE:</h5>
          <p className="col card-text">{planet.climate}</p>
        </div>
        <div className="row">
          <h5 className="col-3 card-title">TERRAIN:</h5>
          <p className="col card-text">{planet.terrain}</p>
        </div>
        <div className="row mt-3">
          <h5 className="col card-title">FILMS</h5>
        </div>
        <div className="row">
        <ul>
            {planet.films.map(s => (<li>{s.title}</li>))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Planet;
