import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import List from './components/List'
import Card from './components/Card'

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [recipeList, setRecipeList] = useState(null)

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const respone = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?query=pasta&query=pizza&addRecipeNutrition=true&number=12&apiKey="
        + API_KEY
      );

      const recipes = await respone.json();
      setRecipeList(recipes.results)
      console.log(recipes.results)
    }

    fetchRandomRecipe().catch(console.error);
  }, [1]);

  return (
    <>
      <div className="App">
        <div className='sidebar'>
          <Header />
          <NavBar />
        </div>

        <div className='main-page'>
          <div className='row'>
            <Card title="Cusine" value="Italian"/>
            <Card title="Recipe for" value="Pasta/Pizza"/>
            <Card title="Dish Type" value="Main Course"/>
          </div>
          <div className='row'>
            {recipeList ?
              <List recipeList={recipeList} /> :
              <div> </div>}
          </div>
        </div>


      </div>

    </>
  )
}

export default App
