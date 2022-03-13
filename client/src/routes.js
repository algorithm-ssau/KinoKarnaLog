 import React from 'react'
 import {Routes,Route, Redirect, Navigate} from 'react-router-dom'
 import {MainPage} from './pages/MainPage'
// import {CreatePage} from './pages/CreatePage'
// import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import { CheckPage } from './pages/Check'

 export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/check" element={<CheckPage/>}/>
        <Route path="/" element={<Navigate to="/main"/>}/>
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/main" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
