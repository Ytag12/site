import { observer } from 'mobx-react-lite';
import React from 'react';
import { create } from '../http/forumApi'
import { MAIN_ROUTE } from '../consts/consts';
import {Navigate, useNavigate} from "react-router-dom";

const AddForum = observer(() => {
    const [name, setName] = React.useState('')
    const [description, setDesc] = React.useState('')
    const [img, setImg] = React.useState(null)
    const [imgUrl, setImgUrl] = React.useState(null)
    const navigate = useNavigate();

    const addForum = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description);
        formData.append('img', img)
        create(formData)
        navigate(MAIN_ROUTE)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Получаем файл
        setImg(file); // Сохраняем файл в состоянии
        if (file) {
            const url = URL.createObjectURL(file); // Создаем URL для отображения
            setImgUrl(url); // Сохраняем URL в состоянии
        }
    };

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
                    <a class="upperA" href="main.html">Главная</a>
                    <a class="upperA" href="aboutUs.html">О нас</a>
                    <a class="upperA" href="contacts.html">Контакты</a>
                    <a class="upperA" href="suport.html">Поддержка</a>
                    <a class="mainPage">Создать тему</a>
                </div>
            </header>
            <main>
                <div class="addForumForm">
                    <p>Ваше изображение</p>
                    <div class="conteiner">
                        <input  
                            onChange={
                                handleImageChange
                            }
                            type='file' 
                            placeholder='+' 
                            name='img' 
                            className="addImage" 
                            style={{ display: 'none' }} // Скрываем стандартный input
                            id="fileInput" // Добавляем id для связывания с кнопкой
                        />
                        <label 
                            htmlFor="fileInput" // Связываем label с input
                            style={{
                                display: 'inline-block',
                                width: '335px',
                                height: '335px',
                                backgroundImage: imgUrl ? `url(${imgUrl})` : 'none', // Устанавливаем изображение как фон
                                backgroundSize: 'cover', // Подгоняем изображение по размеру
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                lineHeight: '100px',
                                color: '#fff',
                                backgroundColor: '#007bff' // Цвет кнопки по умолчанию
                            }}
                        >
                            {imgUrl ? '' : '+'} {/* Показываем '+' если изображение не выбрано */}
                        </label>
                        <div class="description">
                            <input type="text" onChange={e => setName(e.target.value)} class="titleForm" placeholder="Название темы:" name="title"/>
                            <input type="text" onChange={e => setDesc(e.target.value)} class = "decrp" placeholder="Описание:" name="descr"/>
                        </div>
                    </div>
                    <div class="CreateDiv">
                        <button class="Create" onClick={addForum}>Создать новую тему!</button>
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

export default AddForum;