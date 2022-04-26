import React, {useContext, useEffect} from 'react'
//import { useAuth } from '../hooks/auth.hook'
//import {Link} from 'react-router-dom'
// import {useHttp} from '../hooks/http.hook'
// // import {useHttp} from '../hooks/http.hook'
// // import {useMessage} from '../hooks/message.hook'
  //import {AuthContext} from '../context/AuthContext'
  import {Navbar} from '../Navbar'
  import { Header } from '../Header'
  import { Mainpage } from '../Mainpage'


  

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

//-----------------------------------------//
/* <textarea id="message">Авторы данного продукта: Пирюшов Максим, Сушко Кирилл, Пирюшов Александр, Спиркин Пётр, Улитина Валентина</textarea>
<button id="speak" onClick={speak}>Озвучить</button> 
              const speak = async(text) =>
                {
                  try
                  {
                    const txtMessage = document.getElementById("message");
                  const message = new SpeechSynthesisUtterance();
                  message.lang = "ru-RU";
                  message.text = txtMessage.value;
                  //message.text = "Авторы данного продукта: Пирюшов Максим, Сушко Кирилл, Пирюшов Александр, Спиркин Пётр, Улитина Валентина";
                  window.speechSynthesis.speak(message);
                  }
                  catch(e){
                    console.log("Ошибочка)) "+e.text);
                  }
                } */


//---------------------------------//
      
            // const btnSpeak = document.getElementById("speak");
            // const txtMessage = document.getElementById("message");
      
            // btnSpeak.addEventListener("click", () => {
            //   alert("ПРИВЕТ");
            //   speak(txtMessage.value);
            // });


  return (
    <div>
      <Navbar text = "Click me"/>
      <div style={{padding: '10px 200px 0px'}}>
        <Header text = "Main Page"/>
      </div>
          <div className='welcome_message'>
            Добро пожаловать на  наш сайт! <br/>
            KinoKarnaLog - это интернет-сервис, позволяющий пользователям смотреть фильмы и сериалы в онлайн режиме.
            Характерной чертой, отличающей данный онлайн-кионтеатр от его аналогов, <br/>
            является лаконичность, удобство в использовании, бесплатный доступ к предоставленным фильмам. 
            <br/>
            Для навигации по сайту используйте Navbar, расположенный в левой части экрана. <br/>
            При переходе на любой жанр открывается страница с фильмами, на данный момент в которой содержатся три фильма.
            К каждому фильму имеется постер, краткое описание фильма и ссылка на трейлер к нему. <br/>
            <br/> <br/> <br/>
            <div class="header_logo">Над сайтом работали:</div>
                <nav class="nav_authors">
                    <a class="nav__link" href="https://github.com/MaksimPir">Безумный Макс</a>
                    <a class="nav__link" href="https://github.com/Olivka07">Оливка</a>
                    <a class="nav__link" href="https://github.com/Theophile-Guillard">Пётр Великий</a>
                    <a class="nav__link" href="https://github.com/kirom163">Кириллиус</a>
                </nav>
          </div> 
          

          
      
  )
}
