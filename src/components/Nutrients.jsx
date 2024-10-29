import React, { Component, useEffect, useState } from "react";
import { BarChart, Bar } from 'recharts';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
  } from "recharts";
  

const API_KEY = import.meta.env.VITE_API_KEY;

const Nutrients = ({recipeList}) => {

    const [data, setData] = useState([]);
    const [recipeDetails, setRecipeList] = useState([]);

    const cleanData = (recipesDetails) => {

        let filteredData = [];

        Object.values(recipesDetails).forEach(value => {
           // console.log("loop " + value.nutrition.caloricBreakdown.percentCarbs);
            filteredData.push({
                'name': value.title,
                'percentCarb': value.nutrition.caloricBreakdown.percentCarbs
            })
        });
        setData(filteredData);
        return filteredData;
    }

    useEffect(() => {
        // const getCoinHist = async () => {
        //     const response = await fetch(
        //         "https://api.spoonacular.com/recipes/complexSearch?query=pasta&query=pizza&addRecipeNutrition=true&number=12&apiKey="
        //         + API_KEY
        //     );
        
        //     const recipes = await response.json();
        //     setRecipeList(recipes.results)
        //   };
        //   getCoinHist().catch(console.error);
        setRecipeList(recipeList);
        console.log(recipeList);
    },);

    
   return(
    <>
    {/* <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Bar dataKey="percentCarb" fill="#8884d8" barSize={30} />
        </BarChart> */}
        {/* <div>
        <br></br>
        <h2>30-Day Price Data for </h2>
      
        <LineChart
          width={1300}
          height={400}
          data={cleanData(recipeDetails)}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <Line
            type="monotone"
            dataKey="open price"
            stroke="#8884d8"
            activeDot={{ r: 5 }}
          />
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" interval={2} angle={20} dx={20}>
            <Label value="Name" offset={0} position="insideBottom" />
          </XAxis>
      
          <YAxis
            label={{
              value: "Price",
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
            }}
          />
          <Tooltip />
        </LineChart>
      </div> */}
      </>
      
   )
        
}

export default Nutrients