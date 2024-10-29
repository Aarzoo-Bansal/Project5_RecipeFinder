import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Header from "./Header";
import NavBar from "./NavBar";
import "/src/App.css"
import "/src/CSS/Recipe.css"


const API_KEY = import.meta.env.VITE_API_KEY;

const RecipeDetail = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);

    const getScore = (score) => {

        return Math.floor(score);
    }

    const roundNumber = (number) => {
        return Number(number.toFixed(2));
    }

    useEffect(() => {
        const getRecipeDetails = async () => {
            const details = await fetch(
                `https://api.spoonacular.com/recipes/${params.symbol}/information?includeNutrition=false&apiKey=`
                + API_KEY
            );

            const detailsJson = await details.json();
            console.log(detailsJson)

            setFullDetails(detailsJson);
        };

        getRecipeDetails().catch(console.error);
    }, [params.symbol]);

    return (
        <>

            <div className="App">
                <div className='sidebar'>
                    <Header />
                    <NavBar />
                </div>

                {fullDetails ? (
                    <div className='main-page'>
                        <h2 className="details"> {fullDetails.title}</h2>
                        <img
                            className="images"
                            src={fullDetails.image}
                            alt={fullDetails.title}
                        />
                
                        <div className="details">
                            <div>
                                <img src="/src/assets/Icons/cheap.svg" />
                                <p className="detailsOfP">${roundNumber(fullDetails.pricePerServing / 100)} per serving</p>
                            </div>
                            
                            <div>
                                <img src="/src/assets/Icons/likes.svg" />
                                <p className="detailsOfP">{fullDetails.aggregateLikes}</p>
                            </div>
                            <div>
                                <img src="/src/assets/Icons/time.svg" />
                                <p className="detailsOfP">Ready in: {fullDetails.readyInMinutes} mins</p>
                            </div>
                            <div>
                                <img src="/src/assets/Icons/score.svg" />
                                <p className="detailsOfP">Health Score: {getScore(fullDetails.healthScore)}%</p>
                            </div>
                        </div>
                        <br></br>
                        <div className="cardSummary">
                            {parse(fullDetails.summary)}
                        </div>
                    </div>
            
            ) : (<div></div>)
            
}
</div>


        </>
    )

}

export default RecipeDetail

