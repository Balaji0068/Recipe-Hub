import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Recipecard({image,name ,cuisine,id}) {
    const navigate =useNavigate();

    function handleDetail(e){
      e.stopPropagation();
      navigate(`/${id}`)
      // console.log(id)
    }
  return (
    <div>
        <div 
        onClick={handleDetail}
        className="card rounded-4 bg-danger text-light" style={{ width: "18rem",cursor:"pointer" }}>
  <img src={image} className="card-img-top rounded-4" alt={name} height={230}/>
  <div className="card-body">
    <h5 className="card-title text-center">{name}</h5>
    <p className="card-text text-center">
      {cuisine}
    </p>
    <div className='text-center'>
    <button 
    className="btn btn-dark"
    onClick={handleDetail}
    >
     Get Detail
    </button>
    </div>
  </div>
</div>
</div>
  )
}
Recipecard.deafultProps ={
            id: 1,
            name: "Classic Margherita Pizza",
            ingredients: [
              "Pizza dough",
              "Tomato sauce",
              "Fresh mozzarella cheese",
              "Fresh basil leaves",
              "Olive oil",
              "Salt and pepper to taste"
            ],
            instructions: [
              "Preheat the oven to 475°F (245°C).",
              "Roll out the pizza dough and spread tomato sauce evenly.",
              "Top with slices of fresh mozzarella and fresh basil leaves.",
              "Drizzle with olive oil and season with salt and pepper.",
              "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
              "Slice and serve hot."
            ],
            prepTimeMinutes: 20,
            cookTimeMinutes: 15,
            servings: 4,
            difficulty: "Easy",
            cuisine: "Italian",
            caloriesPerServing: 300,
            tags: [
              "Pizza",
              "Italian"
            ],
            userId: 45,
            image: "https://cdn.dummyjson.com/recipe-images/1.webp",
            rating: 4.6,
            reviewCount: 3,
            mealType: [
              "Dinner"
            ]
          }
   