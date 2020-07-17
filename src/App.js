import React, {useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () =>{
  const APP_ID = 'a64cc25b';
  const APP_KEY = 'fd3a8495db93367742137e35f536248f';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  useEffect(()=>{getRecipes()
  }, [query]);
  const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data.hits);
  setRecipes(data.hits);
}
 const updateSearch = e=>{
  setSearch(e.target.value);
 }
 const getSearch = e=>{
   e.preventDefault();
  setQuery(search);
  setSearch('');
  console.log(query);
 }
  return (
    <div className="App">
    <form className="Search-form" onSubmit={getSearch}> 
    <input className="Search-bar" onChange={updateSearch} type="text" value={search} /> 
    <button  className="Search-button"type="submit">Search</button>
    </form>
    <div className="recipes">

   {recipes.map(recipe => (
    <Recipe
    key={recipe.recipe.label}
    title={recipe.recipe.label}
    src={recipe.recipe.image}
    calories={recipe.recipe.calories}
    ingredients={recipe.recipe.ingredients}/>
    ) 
    )}
    </div>
    </div>
  );
}

export default App;
