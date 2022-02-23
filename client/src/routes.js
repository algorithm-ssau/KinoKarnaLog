
import React from 'react'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import {AuthPage}  from './pages/AuthPage'
import { MainPage } from './pages/MainPage'


export const useRoutes= isAuthenticated=>{

    if(isAuthenticated){
        return(
             <Routes>
                <Route path="/main" exact element={<MainPage/>}>
                </Route>
               
            </Routes>
        )
    }
    return(
        <Routes>
            <Route path="/" exact element={<AuthPage/>}>
            </Route>
           
        </Routes>
        
    )
    

}



