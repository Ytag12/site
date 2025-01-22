import React, { useEffect, useState } from 'react';
import {getAll} from '../http/forumApi'
import Forum from './Forum'; // Импортируем компонент для отображения одного форума
import { data } from 'react-router-dom';
import './css.css'

const ForumsList = () => {
    const [forums, setForums] = useState([]); // Хук состояния для хранения форумов
    const [loading, setLoading] = useState(true); // Хук состояния для загрузки

    useEffect(() => {
        const fetchForums = async () => {
            try {
                const data = await getAll();
                setForums(data);
            } catch (e) {
                console.log('Ошибка при загрузке форумов: ');
            } finally {
                setLoading(false);
            }
        };

        fetchForums();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>; // Сообщение о загрузке
    }

    return (
        <div className="forums-list">
            <h2>Список форумов</h2>
            {forums.length > 0 ? (
                forums.map(forum => (
                    <Forum key={forum.id} forum={forum} /> // Отображаем каждый форум
                ))
            ) : (
                <p>Нет доступных форумов.</p> // Сообщение, если форумов нет
            )}
        </div>
    );
};

export default ForumsList;