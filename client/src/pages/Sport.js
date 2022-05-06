import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'

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
          <Header text = "Спорт"/>
            </div>
            <ul>
            <hr></hr>
            <Film  text_head = "Выкрутасы" ref_video = "https://www.youtube.com/watch?v=3Tbd4T0VB94"
    ref_img = "https://www.vokrug.tv/pic/product/1/d/9/0/1d907ce09c885c7ea991093bbe1ee982.jpeg"
  text_desc ="Слава Колотилов, простой школьный учитель из сонного приморского городка с небанальным названием «Пальчики», 
  приехал покорять Москву с рукописью романа в руках, а покорил… красавицу Надю. Уже близится свадьба, ресторан заказан 
  и гости приглашены, но цепкие Пальчики не дают Славе вырваться к суженой, подстраивая череду «непреодолимых обстоятельств».
   Вот и приходится Славе выкручиваться, рассказывая Наде по телефону небылицы о страшных происшествиях и катастрофах. А в
    далёкой Москве в это время Надя отбивает атаки своего бывшего ухажера Дани, готового пойти на любые выкрутасы, лишь бы 
    вернуть себе невесту…"/>
            
            <Film  text_head = "Гол" ref_video = "https://www.youtube.com/watch?v=yDnZQZJsipE"
    ref_img = "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/b4836fe7-5087-43cf-b477-13523f135a8b/1920x"
  text_desc ="Воплотить свои мечты в жизнь, стать профессиональным футболистом — вот чем руководствуется Сантьяго Муньес,
   направляясь в Англию. Любовь и дружба, мужество и обаяние — встречаются на его пути…"/>
   
   <Film  text_head = "Дневник памяти" ref_video = "https://youtu.be/FC6biTjEyZw"
    ref_img = "https://upload.wikimedia.org/wikipedia/ru/thumb/8/86/Posternotebook.jpg/315px-Posternotebook.jpg"
  text_desc ="Это история отношений юноши и девушки из разных социальных слоев, живших в Южной Каролине. Ной и Элли 
  провели вместе незабываемое лето, пока их не разделили вначале родители, а затем Вторая мировая война.
  После войны все изменилось: Элли обручилась с удачливым бизнесменом, а Ной жил наедине со своими воспоминаниями в старинном доме, 
  который ему удалось отреставрировать. Когда Элли прочла об этом в местной газете, она поняла: ей нужно найти его и решить наконец 
  судьбу их любви..."/>
         
           </ul> 
          </div>
  )
}