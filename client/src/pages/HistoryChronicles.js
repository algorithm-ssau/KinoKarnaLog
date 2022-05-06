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











            </ul>
          </div>
  )
}