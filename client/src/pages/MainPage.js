import React, {useContext, useEffect, useState} from 'react'
import { useAuth } from '../hooks/auth.hook'
import {Link} from 'react-router-dom'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  import {AuthContext} from '../context/AuthContext'

 export const MainPage = () => {
  const auth = useContext(AuthContext)
   const {token,qwer,outl,qwer1,qwer2}=useAuth()
  // const auth = useContext(AuthContext)
  // const message = useMessage()
  
  // const [form, setForm] = useState({
  //   email: '', password: ''
  // })

//   useEffect(() => {
//     message(error)
//     clearError()
//   }, [error, message, clearError])

//   useEffect(() => {
//     window.M.updateTextFields()
//   }, [])

//   const changeHandler = event => {
//     setForm({ ...form, [event.target.name]: event.target.value })
//   }

//   const registerHandler = async () => {
//     try {
//       const data = await request('/api/auth/register', 'POST', {...form})
//       message(data.message)
//     } catch (e) {}
//   }

  const logoutHandler = async () => {
    try {
      console.log('Click','Click')
      auth.logout()
    } catch (e) {}
  }

  return (
      <div>
          <h1>MainPage</h1>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{marginRight: 10}}
              onClick={logoutHandler}
            >
              Выйти
            </button>
            </div>
            <Link to="/check">Check </Link>

   </div>
  )
}
