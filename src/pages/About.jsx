import React from "react";
import Header from "../components/Header";
import "../pages/About.css"
import {Link} from "react-router-dom"

const AboutUs = () => {
    return(
    <div>
        <Header/>
        <div className="hider">
        <Link to="/" style={{ textDecoration: 'none' }}>
                        <button>Back</button>
                    </Link> 
        </div>
        <div className="AboutUsText">
            <div className="AboutUsTextConteiner">               
                <p> Добро пожаловать на "Deary" В "Deary" мы считаем, что простота - ключ к производительности</p>
                <p>Наша платформа разработана для того, чтобы сделать ведение заметок плавным и приятным процессом, помогая вам без особых усилий фиксировать идеи, размышления и важную информацию. </p>
                <p> Особенности: ** Интуитивно понятный интерфейс: ** Наш удобный интерфейс упрощает создание заметок и управление ими. 
                Являетесь ли вы студентом, профессионалом или кем-либо, кому нужен цифровой блокнот, "Deary" подойдет для всех. </p>
                <p>Готовы произвести революцию в ведении заметок? Зарегистрируйтесь сейчас и примите будущее цифрового управления заметками с "Deary". Ваш</p>
            </div>
        </div>
    </div>
    );
}

export default AboutUs;