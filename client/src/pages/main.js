import React, {useContext} from 'react';
import '../components/css.css'
import {Context} from "../index";
import {login} from '../http/userAPI'
import { Link } from "react-router-dom"
import {observer} from "mobx-react-lite";
import {Navigate, useNavigate} from "react-router-dom";
import {fetchOneForum} from '../http/forumApi'
import ForumsList from "../components/ForumsList";
import { MAIN_ROUTE } from '../consts/consts';
import { ADD_FORUM } from '../consts/consts';


const Main = observer(() => {
    const {user} = useContext(Context)
    // const {forum} = useContext(Context)
    // useEffect(() =>{
    //     fetchOneForum().then(data => forum.set(data.rows))
    // })
    const [log, setLog] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate();
    const signIn =  async () => {
         try {
            let data;
            data = await login(log, password);
            user.setUser(data)
            user.setIsAuth(true)
            navigate(ADD_FORUM)
        } catch (e) {
            alert(e.response ? e.response.data.message : 'Произошла ошибка.');
        }
    }
    
    return(
        <div>
            <header>
                <div className="mainInfo">
                    <div className = "inputsLog">
                        <div>
                            <input 
                                type="text" 
                                name="login" 
                                placeholder="Логин" 
                                className="name" 
                                value={log} 
                                onChange={e => setLog(e.target.value)}
                            />
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Пароль" 
                                className="password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="login-form__submit" onClick={signIn}>Войти</button>
                    </div>
                    <div className="titleHead">
                        <h1>Forumkan</h1>
                        <img src={`${process.env.PUBLIC_URL}/images/Group 3.png`}/>
                    </div>
                    <div>
                        <button className="night">Ночная тема</button>
                    </div>
                </div>
                <div className ="likeButtons">
                    <a className="upperA">Главная</a>
                    <Link className="upperA" to="/AboutUs">О нас</Link>
                    <Link className="upperA" to="/Contacts">Контакты</Link>
                    <Link className="upperA" to="/Support">Поддержка</Link>
                    <Link className="upperA" to="/AddForum">Создать тему</Link>
                </div>
            </header>
            <main>
                <div>
                    <p>Добро пожаловать на FORUMKAN — место, где каждый может найти обсуждение по интересующей теме или создать собственную! Здесь вы сможете делиться мнениями, задавать вопросы и обмениваться опытом с единомышленниками. Независимо от того, интересует ли вас наука, искусство, технологии или повседневные дела — у нас есть раздел для вас. Присоединяйтесь к активному сообществу, участвуйте в обсуждениях и расширяйте свои горизонты! Ваши идеи и мысли важны для нас. Создайте тему и начните диалог уже сегодня!</p>
                    <div className="line"></div>
                    <ForumsList/>
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
})

export default Main;