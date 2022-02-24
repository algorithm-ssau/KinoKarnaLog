import React from 'react'
export const AuthPage=()=>{
    return(
        <div className='row'>
            <div className="col s6 offset-s3">
              
                <div className="card  cyan darken-3">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
         
        </div>
        <div className="card-action">
        <div class="input-field ">
          <input placeholder="Введите Email" id="email" type="text"  name="email" />
          <label for="email">Email</label>
        </div>
        <div class="input-field ">
          <input placeholder="Введите пароль" id="password" type="password" name="password" />
          <label for="password">Password</label>
        </div>
          <button className='btn  light-blue lighten-5 black-text' style={{marginRight:10}}>Войти</button>
          <button className='btn  light-blue lighten-5 black-text '>Регистрация</button>
        </div>
      </div>
    </div>
        </div>
    )

}
