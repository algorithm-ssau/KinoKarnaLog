import React, {useContext} from 'react'
import { useAuth } from '../hooks/auth.hook'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  import {AuthContext} from '../context/AuthContext'

 export const CheckPage = () => {
  const auth = useContext(AuthContext)
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


  return (
    <div>
      <h1>CHECKPAGE</h1>
    </div>
  )
}
