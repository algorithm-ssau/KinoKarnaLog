import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'
import React, {useContext, useEffect, useState} from 'react'


const Navbar = (props) => {

    const auth = useContext(AuthContext)
    const {text = ''} = props;
    const logoutHandler = async () => {
        try {
          console.log('Click','Click')
          auth.logout()
        } catch (e) {}
      }
    return(
    <div className={styles.myclass}>
        <Link  className={styles.myclass2} to="/main" >KinoKarnaLog</Link>
        <Link  className={styles.myclass1} to="/main">Главная</Link>
        <Link  className={styles.myclass1} to="/comedy">Комедии</Link>
        <Link  className={styles.myclass1} to="/boeviki">Боевики</Link>
        <Link  className={styles.myclass1} to="/drama">Драмы</Link>
        <Link  className={styles.myclass1} to="/fairytales">Сказки</Link>
        <Link  className={styles.myclass1} to="/fantasy">Фэнтези</Link>
        <Link  className={styles.myclass1} to="/fears">Ужасы</Link>
        <Link  className={styles.myclass1} to="/melodrama">Мелодрамы</Link>
        <Link  className={styles.myclass1} to="/musicl">Мюзиклы</Link>
        <Link  className={styles.myclass1} to="/romantik">Романы</Link>
        <Link  className={styles.myclass1} to="/science">Наука</Link>
        <Link  className={styles.myclass1} to="/sport">Спорт</Link>
        <Link  className={styles.myclass1} to="/trillers">Триллеры</Link>
        <Link  className={styles.myclass1} to="/animefilm">Аниме</Link>
        <Link  className={styles.myclass1} to="/documentalfilm">Документалистика</Link>
        <Link  className={styles.myclass1} to="/historychronicles">Исторические хроники</Link>
        <button 
        className={styles.myclass3}
        onClick={logoutHandler}
      >
        Выйти
      </button>
    </div>
    )
}

export {Navbar};