import { useContext } from "react"
import {Context} from "../index";
import './css.css';

const Header = () => {
    const {user} = useContext(Context)
    return (    
        <header>
        <div class="mainInfo">
            <div class = "inputsLog">
                <div>
                    <input type="text" name="login" placeholder="Логин" class="name" />
                    <input type="password" name="password" placeholder="Пароль" class="password" />
                </div>
                <button class="enter">Вход</button>
            </div>
            <div class="titleHead">
                <h1>Forumkan</h1>
                {/* <img src="./images/Group 3.png" /> */}
                <img src="./images/Group 3.png" />
            </div>
            <div>
                <button class="night">Ночная тема</button>
            </div>
        </div>
        <div class ="likeButtons">
            <a class="upperA">Главная</a>
            <a class="upperA" href="aboutUs.html">О нас</a>
            <a class="upperA" href="contacts.html">Контакты</a>
            <a class="upperA" href="suport.html">Поддержка</a>
            <a class="upperA" href="AddForum.html">Создать тему</a>
        </div>
        </header>
    );
};

export default Header;