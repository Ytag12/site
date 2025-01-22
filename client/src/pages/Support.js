import React from 'react';
import { Link } from 'react-router-dom';
import {observer} from "mobx-react-lite";

const Support = () => {
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
            <a>Все что вам не нравится - ваши проблемы. А поддержки пока нет :(</a>
        </div>
    </main>
        <footer>
            <div class="aboutUs">
                <a>О нас</a><br/>
                <img src = {`${process.env.PUBLIC_URL}/images/Vector.png`}/>
                <img src = {`${process.env.PUBLIC_URL}images/Vector (1).png`}/>
                <img src = {`${process.env.PUBLIC_URL}images/Vector (2).png`}/>
                <p>Forum kan©</p>
            </div>
            <div className="weAreHere">
                <p>Мы здесь!</p>
            </div>
            <div>
                <button className="night">Ночная тема</button>
            </div>
        </footer>
    </div>
    )
}

export default Support;