import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'
 export const FearsPage = () => {
  

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Ужасы"/>
            </div>
            <ul>
            <hr></hr>
  <Film  text_head = "Молчание ягнят" ref_video = "https://youtu.be/9JTNhAOVosk"
    ref_img = "https://images.wbstatic.net/big/new/8590000/8593703-1.jpg"
  text_desc ="Психопат похищает и убивает молодых женщин по всему Среднему Западу.
   ФБР, уверенное, что все преступления совершены одним и тем же человеком, поручает агенту Клариссе Старлинг встретиться 
   с заключенным-маньяком Ганнибалом Лектером, который мог бы помочь составить психологический портрет убийцы.
   Сам Лектер отбывает наказание за убийства и каннибализм.
   Он согласен помочь Клариссе лишь в том случае, если она попотчует его больное воображение подробностями своей личной жизни."/>

<Film  text_head = "Техасская резня бензопилой" ref_video = "https://youtu.be/4o0ndvAuqIE"
    ref_img = "https://www.film.ru/sites/default/files/movies/posters/1629992-2056445.jpg"
  text_desc ="В Техасе на ферме Томаса Хьюитта обнаружили 33 изувеченных тела.
   Пресса окрестила убийцу Кожаным Лицом, а человек, носивший кожаную маску, был застрелен. Однако полиция взяла не того.
   Уцелевший свидетель поведал, что произошло на самом деле, когда пятеро подростков оказались в ловушке у безумца с бензопилой."/>



</ul>
          </div>
  )
}