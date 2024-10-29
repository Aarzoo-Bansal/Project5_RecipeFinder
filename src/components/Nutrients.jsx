import React, { Component, useEffect, useState } from "react";
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

const Nutrients = ({recipeList}) => {

    const [data, setData] = useState([]);
    const [recipeDetails, setRecipeDetails] = useState([]);

    useEffect(() => {

        const cleanData = () => {

            let filteredData = [];
    
            Object.values(recipeDetails).forEach(value => {
               console.log("loop " + value.nutrition.caloricBreakdown.percentCarbs);
                filteredData.push({
                    name: value.title,
                    percentCarb: value.nutrition.caloricBreakdown.percentCarbs
                })
            });
            setData(filteredData);
        }

        console.log("nutrient")
        console.log(recipeList);
        setRecipeDetails(recipeList);
        cleanData();
        console.log(recipeList);
    }, [1000]);

    
   return(
    <>
    <div>
            <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="percentCarb" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
     {/* <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            
            <Bar dataKey="percentCarb" fill="#8884d8" barSize={30} />
        </BarChart>  */}
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