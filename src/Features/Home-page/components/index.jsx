import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setRecipe } from '../../../Redux/Reducer';
import Carousel from './Carousel';
import RecipeList from './recipe-list';

export default function HomePage() {
    const [err,setErr] =useState(null)
    const dispatch =useDispatch();
useEffect(()=>{
   axios
     .get('https://dummyjson.com/recipes')
     .then((res)=>{
        console.log(res)
        dispatch(setRecipe(res.data.recipes))
     })
     .catch((error)=>{
       setErr(error)
     })
},[]);

if(err){
    return <h2>{err}</h2>
}  
return (
<div style={{backgroundColor:"black"}}>
   <Carousel/>
   <br />
   <br />
   <h1 className='text-danger text-center'><i>Explore Recipes</i></h1>
   <br />
   <br />
   <div className='container'>
   <RecipeList/>
   </div>  
</div>
  )
}
