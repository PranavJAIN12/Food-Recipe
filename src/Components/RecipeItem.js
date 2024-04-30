import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = (props) => {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center text-center">
        <div className="card" style={{ width: "23rem", height: "auto", marginTop: "4em" }}>
          <img src={props.imageUrl} className="card-img-top" alt="image not available" style={{ height: '200px', width: 'auto' }} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">Belongs to: {props.area}</p>
            <span className="badge text-bg-primary fs-6" style={{ display: 'flex', justifyContent: 'flex-end', right: '-10px', top: '0', position: 'absolute' }}>{props.category}</span>
            <Link to={`/recipe/${props.recipe.idMeal}`} className="btn btn-danger mx-4">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;