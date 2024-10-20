import React from 'react'
import { Header } from '../Core/components/header'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>
      <Header/>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}
