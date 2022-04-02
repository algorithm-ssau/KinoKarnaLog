import React from 'react'
import {Navbar} from '../Navbar'
import {Header} from '../Header'

 export const BoevikiPage = () => {

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
            <Header text = "Боевики"/>
            <ul>
            <li>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/DpedroI-brasil-full.jpg/225px-DpedroI-brasil-full.jpg"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Джон Уик 
                 <p>Тайная гильдия профессиональных убийц хочет уничтожить Джона Уика, после того как он нарушил кодекс 
                    ассасинов. За его голову назначена награда в 14 миллионов долларов. Лучшие убийцы планеты начинают охоту 
                    на киллера.</p>
                 <a href="https://youtu.be/M7XM597XO94">Трейлер на YouTube</a>
                 
              </li>
              <p>
              <li>
               <p><img src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/03/Mad_max_poster.jpg/297px-Mad_max_poster.jpg"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Безумный Макс </p>
                 <p>Безумный Макс сталкивается с группой людей, которые пересекают Пустошь на Военном Грузовике 
                    под предводительством Императора Фуриозы. Фильм — отчёт о Дорожной Войне, которая за этим последует. 
                    Он основан на Словобургерах Исторического Человека и свидетельствах очевидцев, которым удалось выжить.</p>
                 <a href="https://youtu.be/hEJnMQG9ev8">Трейлер на YouTube</a>
              </li>
              </p>
               
              <li>
               <p><img src="https://upload.wikimedia.org/wikipedia/ru/1/13/Drive2011Poster.jpg"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Драйв </p>
                 <p>Днём он потрясающий каскадёр, выполняющий сложнейшие трюки на съёмочных площадках, 
                    а ночью он ведёт опасную игру. Один не обдуманный поступок - и за его жизнь объявлена награда. 
                    Теперь ему остаётся только одно - виртуозно уйти от погони...</p>
                 <a href="https://youtu.be/KBiOF3y1W0Y">Трейлер на YouTube</a>
              </li>
           </ul>
            </div>
            
          </div>
          
  )
}
