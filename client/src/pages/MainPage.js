import React, {useContext, useEffect} from 'react'
//import { useAuth } from '../hooks/auth.hook'
//import {Link} from 'react-router-dom'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  //import {AuthContext} from '../context/AuthContext'
  import {Navbar} from '../Navbar'
  import { Header } from '../Header'

 export const MainPage = () => {
  
  // const auth = useContext(AuthContext)
  // const message = useMessage()
  
  // const [form, setForm] = useState({
  //   email: '', password: ''
  // })

//   useEffect(() => {
//     message(error)
//     clearError()
//   }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

//   const changeHandler = event => {
//     setForm({ ...form, [event.target.name]: event.target.value })
//   }

//   const registerHandler = async () => {
//     try {
//       const data = await request('/api/auth/register', 'POST', {...form})
//       message(data.message)
//     } catch (e) {}
//   }



  return (
    <div>
          
    
          <Navbar text = "Click me"/>

          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Main Page"/>
            </div>
            
          </div>
          
      
  )
}
