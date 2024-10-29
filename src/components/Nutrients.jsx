import React, { Component, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Nutrients = ({ recipesDetails }) => {

    const [data, setData] = [];

    const cleanData = () => {

        let filteredData = [];

        Object.values(recipesDetails).forEach(value => {
            console.log(value.nutrition.caloricBreakdown.percentCarbs);
            filteredData.push({
                'name': value.title,
                'percentCarb': value.nutrition.caloricBreakdown.percentCarbs
            })
        });
        setData(filteredData);

        return filteredData;


    }

    const renderBarChart = (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor : '#ccc'}} />
            
        </BarChart>
    )













}

export default Nutrients