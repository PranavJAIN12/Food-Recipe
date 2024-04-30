import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import RecipeItem from './Components/RecipeItem';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change here
import RecipeDetail from './Components/RecipeDetail';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const searchRecipe = async () => {
    try {
      const response = await axios.get(api + search);
      setRecipes(response.data.meals); 
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    searchRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipe();
  };

  const handleChange=(e)=>{
    setSearch(e.target.value);
  };

  return (
    <Router> 
      <Navbar />
      <Routes>
      <Route path="/" element={ <HomePage recipes={recipes} />} /> 
      <Route path="/recipe/:id" element={<RecipeDetail/>} /> 
      </Routes>
      <SearchBar 
        handleSubmit={handleSubmit} 
        search={search}
        handleChange={handleChange} 
      />
      <div className='d-flex justify-content-between flex-wrap recipe-sec'>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.idMeal}
            recipe={recipe}
            imageUrl={recipe.strMealThumb}
            title={recipe.strMeal}
            category={recipe.strCategory}
            area={recipe.strArea}
          />
        ))}
      </div>
    </Router> 
  );
}

export default App;
