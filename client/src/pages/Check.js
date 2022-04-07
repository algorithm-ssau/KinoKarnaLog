import React, {useContext} from 'react'

import { useAuth } from '../hooks/auth.hook'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  import {AuthContext} from '../context/AuthContext'
  import {Navbar} from '../Navbar'
  import { Header } from '../Header'
  import { Film } from '../Film'

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
          <Navbar text = "Click me"/>
          <header>
          <div style={{padding: '10px 200px 0px'}}>
                    </div>
          </header>
          <div style={{padding: '10px 200px 0px'}}>
          <Header text = "Комедии"/>
            </div>
            
            <ul>
<hr></hr>
  <Film  text_head = "Круэлла" ref_video = "https://www.youtube.com/watch?v=jpZrVxvG3mk"
    ref_img = "https://www.film.ru/sites/default/files/styles/epsa_600x680/public/articles/49718650-1524265.jpg"
  text_desc ="Лондон 70-х годов охвачен зарождающейся культурой панк-рока. 
  Невероятно одаренная мошенница по имени Эстелла решает сделать себе имя в мире моды. 
  Её лучшие друзья — парочка юных карманников, которые ценят страсть Эстеллы к приключениям и надеются 
  вместе с ней отвоевать себе место под солнцем на улицах британской столицы. В один прекрасный день модное 
  чутье Эстеллы привлекает внимание шикарной и пугающе высокомерной баронессы фон Хельман."/>



 
   

</ul>

          </div>
  )
}
