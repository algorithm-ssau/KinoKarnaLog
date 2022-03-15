import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'

 export const SportPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
            <h1>Спорт</h1>
            </div>
            
          </div>
  )
}