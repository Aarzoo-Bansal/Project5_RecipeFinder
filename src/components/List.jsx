import React, { useEffect, useState } from "react";
import '/src/CSS/List.css'

const List = ({ recipeList }) => {
    const [isVeg, setIsVeg] = useState("");
    const [isDiaryFree, setIsDiaryFree] = useState("");
    const [recipeResult, setRecipeResult] = useState(null);
    const [name, setName] = useState("");
    
    useEffect(() => {
        setRecipeResult(recipeList)
    }, []);

    const handleFilters = (e) => {
        e.preventDefault();
        let dairyFilter = isDiaryFree;
        let vegFilter = isVeg;
        let nameFilter = "";
        if(name !=""){
            nameFilter=name;
        }

        if(nameFilter=='' && vegFilter=='' && dairyFilter==''){
            setRecipeResult(recipeList);
            return;
        }

        let newList = []
        recipeList.forEach(recipe => {

            if( (isDiaryFree=="" || (recipe.dairyFree.toString() == isDiaryFree)) && (isVeg=="" || (recipe.vegetarian.toString() == isVeg)) && ( name=="" || recipe.title.toLowerCase().includes(name.toLowerCase()))){
                let newRecipe = recipe;
                newList = [...newList, newRecipe]
            }
        });

        setRecipeResult(newList)
    }
    

    return (
        <div className="list-recipe">
            
            <div className="filters">
            <form onSubmit={handleFilters}>
                <div className='vegetarian-filter'>
                    <input
                        type="text"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='vegetarian-filter'>
                    <label>Vegetarian Filter? </label>
                    <select
                        id="vegetarian"
                        name="vegetarian"
                        value={isVeg}
                        onChange={(e) => setIsVeg(e.target.value)}
                    >
                        <option value="">None</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                

                <div className="dairy-filter">
                    <label>Diary Filter? </label>
                    <select
                        id="diaryFree"
                        name="diaryFree"
                        value={isDiaryFree}
                        onChange={(e) => setIsDiaryFree(e.target.value)}
                    >
                        <option value="">None</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <button className="btn" type="submit">Search</button>
                </form>
            </div>

            <div className="table">

                <table>
                    <thead>
                        <tr >
                            <th>Recipe Name</th>
                            <th>Health Score</th>
                            <th>Cooking time in minutes</th>
                            <th>Diary Free?</th>
                            <th>Vegetarian?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeResult &&
                            recipeResult.map(recipe => (
                                <tr key={recipe.id}>
                                    <td>{recipe.title}</td>
                                    <td>{recipe.healthScore}</td>
                                    <td>{recipe.readyInMinutes}</td>
                                    <td>{recipe.dairyFree ? "Yes" : "No"}</td>
                                    <td>{recipe.vegetarian ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                    </tbody>

                </table>
            </div>



        </div>
    )
}

export default List