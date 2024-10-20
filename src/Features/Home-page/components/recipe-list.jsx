import React from 'react'
import { useSelector } from 'react-redux'
import Recipecard from '../../shared/components/recipe-card'

export default function RecipeList() {
    const list = useSelector((state)=>state.recipes.list)
  return (
    <div className='row g-5'>
        {list.map((item)=>(
            <div className='col-md-3' key={item.id}> 
             <Recipecard {...item} />
            </div>
        ))}
    </div>
  )
}
