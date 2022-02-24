
import React from 'react'
import {BrowserRouter,Routes,Route, Navigate, Link} from 'react-router-dom'
import {AuthPage}  from './pages/AuthPage'
import { MainPage } from './pages/MainPage'


export const useRoutes= isAuthenticated=>{

    if(isAuthenticated){
        return(
             <Routes>
                <Route path="/main"  element={<MainPage/>}/>
            </Routes>
        )
    }
    return(
        <Routes>
            <Route path="/"  element={<AuthPage/>}/>    
        </Routes>
        
    )
    

}



