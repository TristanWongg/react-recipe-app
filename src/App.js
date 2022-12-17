import './App.css';
import Recipe from './Recipe';
import { useEffect, useState } from 'react';

function App() {

  const APP_ID = 'a1f492a6';
  const APP_KEY = 'be2b25ddbc82a5242d6a90edc13753b0';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // }


  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type="text" value={search} onChange={ e => setSearch(e.target.value)} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      
      <div className='recipes'>
        {recipes.map((recipe, id) => (
          <Recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
