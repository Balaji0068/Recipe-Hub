import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function RecipeDetail() {
    const {recipeId}= useParams();
    
    // console.log(recipeId); 
    const [recipe ,setRecipe] = useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
     axios
      .get(`https://dummyjson.com/recipes/${recipeId}`)
      .then((res)=>{
        setRecipe(res.data)
        setLoading(false)
      })
      .catch((err)=>{
        setError(err)
      })
    },[recipeId])

    if(loading){
        return <div className='fs-1'>Loading......... </div>   
    }
    if(error){
        return <div className='fs-1'>{error}</div>
    }
    if(!recipe){
        return <div className='fs-1'>invalid product!!!</div>
    }
  return (
    <div>
    <div className='mt-4 card fst-italic' style={{width:"75%",left:"12%", backgroundColor:"black",
    color:"white"
    }}>
        <img height={750} src={recipe.image}/>
       <div className='fs-1 text-center fst-italic fw-bold border-bottom border-5 border-danger'>{recipe.name}</div>
       <div className='row'>
        <div className='col-md-6'>
        <div>{recipe.prepTimeMinutes}</div>
    <div>{recipe.cookTimeMinutes}</div>
    <div>{recipe.cuisine}</div>
    <div>{recipe.caloriesPerServing}</div>
    <div>{recipe.tags}</div>
        </div>
        <div className='col-md-6 fs-5 text-center border'>
        <h3 className='text-danger'>Ingredients</h3>
        {recipe.ingredients.map((item,idx)=>(
       <div key={idx}>
       {item}
       </div>
      ))}
        </div>
       </div>
       <div className='fs-4 ms-4 my-4'><span className='text-danger'><u> Instructions : </u></span>{recipe.instructions}</div>
    </div>
    </div>
   
  )
}
