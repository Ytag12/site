import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Chat = observer(() => {
    return(
        <div>
    <header>
        <div class="mainInfo">
            <div class="titleHead">
                    <h1>Forumkan</h1>
                    <img src={`${process.env.PUBLIC_URL}images/Group 3.png`}/>
                </div>
                <div>
                    <button class="night">Ночная тема</button>
                </div>
        </div>
        <div class ="likeButtons">
            <Link className="upperA" to="/main">Главная</Link>
            <Link className="upperA" to="/AboutUs">О нас</Link>
            <Link className="upperA" to="/Contacts">Контакты</Link>
            <Link className="upperA" to="/Support">Поддержка</Link>
            <Link className="upperA" to="/AddForum">Создать тему</Link>
        </div>
    </header>
    <main>
        <h2 className='Name'></h2>
        <h3 className='Des'></h3>
        <div class="Cont">
            <div class='chat'>
                <div class='chat-messages'>
                  <div class='chat-messages__content' id='messages'> Загрузка... </div>
                </div>
                <div class='chat-input'>
                  <form method='post' id='chat-form'>
                    <input type='text' id='message-text' class='chat-form__input' value=''/>
                    <input type='submit' class='chat-form__submit' value='Отправить'/>
                  </form>
                </div>
              </div>
        </div>
    </main>
    <footer>
        <div class="aboutUs">
            <a>О нас</a><br/>
            <img src = "images/Vector.png"/>
            <img src = "images/Vector (1).png"/>
            <img src = "images/Vector (2).png"/>
            <p>Forum kan©</p>
        </div>
        <div class="weAreHere">
            <p>Мы здесь!</p>
        </div>
        <div>
            <button class="night">Ночная тема</button>
        </div>
    </footer>
</div>
    )
})

export default Chat;