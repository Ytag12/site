import React from 'react';
import { Link } from 'react-router-dom';
import '../components/css.css'

const aboutUs = () => {
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
                <div class="con">
                    <img class="imgUs" src={`${process.env.PUBLIC_URL}/images/Vector.png`}/><p class="us">Если вам инетресно следить за обновлениями в виде видеороликов, то вы можете тыкнуть на текст и перейти на наш канал)</p>
                    <img class="imgUs" src={`${process.env.PUBLIC_URL}/images/Vector (1).png`}/><p class="us">Если вы хотите увидеть самыe странные названия разных обсуждений, то заходите сюда)</p>
                    <img class="imgUs" src={`${process.env.PUBLIC_URL}/images/Vector (2).png`}/><p>Просто фейсбук</p>
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
}

export default aboutUs;