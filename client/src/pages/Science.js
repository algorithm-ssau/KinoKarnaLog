import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

 export const SciencePage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Наука"/>
            </div>
            <ul>
            <hr></hr>
            <Film  text_head = "Дальний космос" ref_video = "https://www.youtube.com/watch?v=n-CVWZHoPRM"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/d/d7/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D1%81.jpg"
  text_desc ="Экипаж космического корабля, направляющегося на Марс, обнаруживает на борту случайного пассажира — техника без сознания. 
  Однако миссию остановить уже невозможно, впереди два года пути, а внимательно обследовав повреждённый прибор, команда понимает, 
  что ресурсов до конца полета на всех не хватит."/>
            
            
         
           </ul>
            
          </div>
  )
}