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



<Film  text_head = "Один дома" ref_video = "https://www.youtube.com/watch?v=IsOlj-xpK9Q"
    ref_img = "https://www.vokrug.tv/pic/product/1/0/5/3/1053b5733f447f1f1829d573c3b99340.jpeg"
  text_desc ="Американское семейство отправляется из Чикаго в Европу, но в спешке сборов 
  бестолковые родители забывают дома… одного из своих детей. Юное создание, однако, не теряется 
  и демонстрирует чудеса изобретательности. И когда в дом залезают грабители, им приходится не раз 
  пожалеть о встрече с милым крошкой."/>
   
   <Film  text_head = "Такси" ref_video = "https://www.youtube.com/watch?v=6fm567YGy5c"
    ref_img = "https://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/00/02/49/22/affiche.jpg"
  text_desc ="Даниэль работает в такси, обожает быструю езду и постоянно лихачет на своем автомобиле
   по улицам Марселя. Через некоторое время он случайным образом знакомится с Эмильеном, который работает в полиции. 
   Эмильен убеждает «гонщика» помочь ему с поимкой преступников, постоянно ускользающих от властей на «Мерседесах»…"/>
   

</ul>

          </div>
  )
}
