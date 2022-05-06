import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'
 export const HistoricalPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Исторические хроники"/>
            </div>
            <ul>
              <hr></hr>
              <Film  text_head = "Касабланка (1942)" ref_video = "https://youtu.be/qkfDOg-uBhY"
    ref_img = "https://trueposters.ru/pictures/product/big/8887_big.jpg"
  text_desc ="Действие фильма разворачивается в начале Второй мировой войны в марокканском городе Касабланка. 
  Сюжет сосредоточен на внутреннем конфликте человека, которому приходится выбирать между долгом и чувством, 
  между любимой женщиной и необходимостью помочь ей и её мужу, лидеру движения Сопротивления,
   бежать из Касабланки для продолжения борьбы с нацистами. «Касабланка» получила три «Оскара», в том числе в категории «лучший фильм»."/>


<Film  text_head = "Бен-Гур (1959)" ref_video = "https://youtu.be/ywf0-gseabQ"
    ref_img = "https://media.kg-portal.ru/movies/b/benhur/posters/benhur_1.jpg"
  text_desc ="Бен-Гура ссылают на галеры, его мать Мириам и сестру Тирзу заточают в тюрьму. 
  По пути к пристани Бен-Гур встречает Иисуса Христа, он подаёт Иуде плошку с водой, конвоиры поражены видом Иисуса, как и Иуда. 
  Во время сражения с пиратами Бен-Гур спасает командующего, консула Квинта Ария.
  Арий во время триумфа просит императора помиловать Иуду и усыновляет его, завещав своё состояние."/>

<Film  text_head = "Плата за страх (1953)" ref_video = "https://youtu.be/vN2q_fjsBx0"
    ref_img = "https://m.media-amazon.com/images/M/MV5BZDdkNzMwZmUtY2Q5MS00ZmM2LWJhYjItYTBjMWY0MGM4MDRjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg"
  text_desc ="Четверо храбрецов, застрявших без денег в крошечном городишке где-то в сердце Латинской Америки, берутся выполнить самоубийственное задание: 
  за 2000 долларов доставить два грузовика с нитроглицерином на нефтяные скважины, расположенные на расстоянии 300 миль от города. 
  Мало того, что груз взрывоопасен, так ещё и дорога — как в российской глубинке. 
  Вероятность добраться до пункта назначения минимальна, но деньги нужны позарез, ведь это пропуск на родину, а другой работы не предвидится."/>






            </ul>
          </div>
  )
}