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
        <Link  className={styles.myclass1} to="/check">CheckPage</Link>
        <Link  className={styles.myclass1} to="/main">Меню</Link>
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