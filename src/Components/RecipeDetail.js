import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function RecipeDetail() {
    const [recipeDetails, setRecipeDetails] = useState(null);
    const { id } = useParams(); // Extract recipe ID from URL params

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setRecipeDetails(response.data.meals[0]);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [id]); // Dependency array ensures effect runs on ID changes

    return (
        <div>
            {recipeDetails && ( // Conditionally render content only if details exist
                <>
                    <h2 className='text-center'>{recipeDetails.strMeal}</h2>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeDetails.strIngredient1 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient1} - {recipeDetails.strMeasure1}</li>
                        )}
                        {recipeDetails.strIngredient2 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient2} - {recipeDetails.strMeasure2}</li>
                        )}
                        {recipeDetails.strIngredient3 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient3} - {recipeDetails.strMeasure3}</li>
                        )}
                        {recipeDetails.strIngredient4 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient4} - {recipeDetails.strMeasure4}</li>
                        )}
                        {recipeDetails.strIngredient5 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient5} - {recipeDetails.strMeasure5}</li>
                        )}
                        {recipeDetails.strIngredient6 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient6} - {recipeDetails.strMeasure6}</li>
                        )}
                        {recipeDetails.strIngredient7 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient7} - {recipeDetails.strMeasure7}</li>
                        )}
                        {recipeDetails.strIngredient8 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient8} - {recipeDetails.strMeasure8}</li>
                        )}
                        {recipeDetails.strIngredient9 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient9} - {recipeDetails.strMeasure9}</li>
                        )}
                        
                    </ul>
                    {/* <div className='img'>
                        <img src={recipeDetails.strMealThumb} alt='ima '  />
                    </div> */}
                    <div className="details text-center">
                    <h3>Instructions</h3>
                        <p>{recipeDetails.strInstructions}</p>
                        <h3>Source</h3>
                        <a href={recipeDetails.strSource}>{recipeDetails.strSource}</a>
                        <h3>Youtube</h3>
                        <a href={recipeDetails.strYoutube}>{recipeDetails.strYoutube}</a>
                    </div>
                    {/* Add other recipe details sections as needed (instructions, image, etc.) */}
                </>
            )}
            {!recipeDetails && <p>Loading recipe details...</p>}
        </div>
    );
}
