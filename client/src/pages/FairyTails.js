import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'

 export const FairyTailsPage = () => {
  const auth = useContext(AuthContext)

  return (
    <html>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
            <h1>Сказки</h1>
            </div>
            
          </html>
  )
}