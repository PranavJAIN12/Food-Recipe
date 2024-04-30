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
                    <h2>{recipeDetails.strMeal}</h2>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeDetails.strIngredient1 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient1} - {recipeDetails.strMeasure1}</li>
                        )}
                        {recipeDetails.strIngredient2 && ( // Check for ingredient existence
                            <li>{recipeDetails.strIngredient2} - {recipeDetails.strMeasure2}</li>
                        )}
                        {/* Repeat checks for all possible ingredients (up to 20) */}
                    </ul>
                    {/* Add other recipe details sections as needed (instructions, image, etc.) */}
                </>
            )}
            {!recipeDetails && <p>Loading recipe details...</p>}
        </div>
    );
}
