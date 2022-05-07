import React, {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Navbar} from '../Navbar'
import { Header } from '../Header'
import { Film } from '../Film'
 export const TrillersPage = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Триллеры"/>
          </div>


        <ul>
            <hr></hr>
            <Film  text_head = "Бойцовский клуб" ref_video = "https://youtu.be/GbS-kM6jb9w"
                   ref_img = "https://upload.wikimedia.org/wikipedia/ru/8/8a/Fight_club.jpg"
                   text_desc ="Герой тратит своё время на нелюбимой работе и даже толком не может выспаться.
                   Но всё меняется после встречи с торговцем мылом по имени Тайлер Дёрден. Тот убеждает героя, что главная и единственная
                   цель жизни — саморазрушение. Тогда друзья открывают «Бойцовский клуб» — тайное место, куда любой может прийти, чтобы подраться."/>

        </ul>
          </div>
  )
}