import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import List from './components/List'
import Card from './components/Card'
import Nutrients from './components/Nutrients'
import ChartTest from './components/ChartTest'
import { BarChart, Bar } from 'recharts';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label
} from "recharts";

const API_KEY = import.meta.env.VITE_API_KEY

function App() {
  const [recipeList, setRecipeList] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const respone = await fetch(
        "https://api.spoonacular.com/recipes/complexSearch?query=pasta&query=pizza&addRecipeNutrition=true&number=8&apiKey="
        + API_KEY
      );

      const cleanData = () => {

        let filteredData = [];

        Object.values(recipeList).forEach(value => {
          let name = value.title.split(" ")[0];
          console.log("loop " + value.nutrition.caloricBreakdown.percentCarbs);
          filteredData.push({
            name: name,
            Carb_Percentage: value.nutrition.caloricBreakdown.percentCarbs
          })
        });
        setData(filteredData);
      }

      const recipes = await respone.json();
      if (recipes != null) {
        console.log("in if");

        setRecipeList(recipes.results)
        cleanData()
      }


      // console.log(recipes.results)

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
            <Card title="Cusine" value="Italian" />
            <Card title="Recipe for" value="Pasta/Pizza" />
            <Card title="Dish Type" value="Main Course" />
          </div>
          <div className='row'>
            {recipeList ?
              <List recipeList={recipeList} /> :
              <div> </div>}
          </div>

          {data ? (<div className="chart">
            <BarChart width={400} height={300} data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis />
              <Tooltip wrapperStyle={{ width: 500, backgroundColor: '#ccc' }} />
              <Legend width={250} wrapperStyle={{ top: 250, right: 3, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 10, lineHeight: '35px' }} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="Carb_Percentage" fill="#8884d8" barSize={30} />
            </BarChart>
          </div>) : (<div></div>)
          }
        </div>

      </div>


    </>
  )
}

export default App
