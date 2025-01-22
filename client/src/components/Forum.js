import React from 'react';
import './css.css'
import { Link } from 'react-router-dom';


const Forum = ({ forum }) => {
    console.log(forum)
    if (!forum || !forum.name || !forum.description || !forum.img) {
        return <div>No forum data available</div>;
    }

    return (
        <article className="forumes">
            {/* <img src={forum.img} alt='prop'/> */}
            <img src={'http://localhost:5000/'+forum.img}/>
            <div className='infoArticle'>
                <h4>{forum.name}</h4>
                <p>{forum.description}</p>
                <Link className="enterButton" to = "/Chat">Войти</Link>
            </div>
        </article>
    );
};

export default Forum;