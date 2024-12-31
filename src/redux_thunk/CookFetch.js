import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux_thunk/CookAction";
import "../";



const Events = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);


  return (
    <div>
      
      <div className="container section-title">
        <h2>Our Menu</h2>
        <p><span>Check Our</span> <span className="description-title">Yummy Recipe</span></p>
      </div>
      <div className="container">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center mb-5">
              <h3>Recipes</h3>
            </div>
            <div className="row gy-5">		
              {recipes.map((recipe) => (
				<div className="col-lg-4 menu-item">
				<Link to={`/recipe/${recipe.id}`} key={recipe.id}  
				className="glightbox" ><img src={recipe.image} className="menu-img img-fluid" style={{ borderRadius: '50px' }} alt={recipe.image} /></Link>
				<br/><h4>{recipe.name}</h4>
				<p className="ingredients">
					{recipe.ingredients}
				</p>
			</div>
              ))}
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Events;
