import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'

 export const FantasyPage = () => {


  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
            <h1>Фэнтези</h1>
            <ul>
            <li>
               <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d906e201-8f29-42ab-8a56-9d7e882856a2/300x450"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Аркейн
                 <p>История разворачивается в утопическом краю Пилтовер и жестоком подземном мире Заун и рассказывает о становлении двух легендарных чемпионов Лиги и о той силе, что разведёт их по разные стороны баррикад.</p>
                 <a href="https://youtu.be/k_LBADQ7jnM">Трейлер на YouTube</a>
                 
              </li>
              <p>
              <li>
               <p><img src="https://www.kinonews.ru/insimgs/poster/thumbs/poster2606_3.jpg"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Властелин колец </p>
                 <p>Поиски великого кольца Саурона завершены. Оно попало в руки хоббитов из Шира, и только от их решимости и стойкости зависит судьба Средиземья. Фродо Бэгинс во главе Братства Кольца отправляется в Мордор, дабы уничтожить кольцо в горниле Роковой горы.</p>
                 <a href="https://youtu.be/V75dMMIW2B4">Трейлер на YouTube</a>
              </li>
              </p>
               
              <li>
               <p><img src="https://www.kinonews.ru/insimgs/poster/thumbs/poster2639_3.jpg"
                width='150px' height='220px' align="top-left" hspace="2%" vspace="0.5%"></img>
                 Зеленая Миля </p>
                 <p>Чернокожий осужденный Джон Коффи (Майкл Кларк Дункан) умеет исцелять людей простым прикосновением рук. Бог даровал ему чувствовать всю боль мира, как физическую, так и душевную. И Коффи способен лечить, забирать и передавать плохую энергию, воскрешать умерших.

Приехав как-то на съмочную площадку, Стивен Кинг решил посидеть на электрическом стуле. Его привязали как положено и на голову надели колпак. Даже несмотря на то, что стул был бутафорским, Кинг запаниковал и попросил немедленно его освободить.</p>
                 <a href="https://youtu.be/Ki4haFrqSrw">Трейлер на YouTube</a>
              </li>
           </ul>
            </div>
            
          </div>
  )
}