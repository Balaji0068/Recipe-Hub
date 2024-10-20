import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Features/Home-page/components'
import RecipeDetail from '../Features/Recipe-detail'
import Dashboard from '../Features/outlet'



export default function RouterComponent() {
  return (
     <Routes>
        <Route path='/' element={<Dashboard/>}>
        <Route index element ={<HomePage/>}/>
        <Route path=':recipeId' element={<RecipeDetail/>} />
        </Route>
     </Routes>
  )
}
