import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import RecipeItem from './Components/RecipeItem';

function App() {
  const [recipes, setRecipes] = useState([]);
  const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const searchRecipe = async () => {
      try {
        const response = await axios.get(api);
        setRecipes(response.data.meals); // Assuming 'meals' holds the array of recipes
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    searchRecipe();
  }, []);

  return (
    <>
      <Navbar />
      <HomePage recipes={recipes} />
      <SearchBar />
      <div className='d-flex justify-content-between flex-wrap recipe-sec'>
        {recipes.map(recipe => (
          <RecipeItem key={recipe.idMeal} recipe={recipe}
          imageUrl={recipe.strMealThumb}
          title = {recipe.strMeal} 
          category = {recipe.strCategory}
          area = {recipe.strArea} />
        ))}
      </div>
    </>
  );
}

export default App;
