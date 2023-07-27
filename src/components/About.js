import React from "react";
import "./About.css";
import myPhoto from "../image/myphoto.jpg";

function About() {
  return (
    <div className="about">
      <img src={myPhoto} alt="об" className="about-photo"></img>
      <div className="about-text">
        <span className="about-text-item-first" id="about">
          🧐 Обо мне
        </span>
        <h2 className="about-text-h1">Ведущий инженер тестировщик</h2>
        <p className="about-text-item">
          <icon>👋</icon>Меня зовут Александр и я являюсь опытным
          инженером-тестировщиком QA, специализирующимся на обеспечении высокого
          качества и надежности веб приложений.
        </p>
        <p className="about-text-item">
          <icon>👨‍💻</icon>Я люблю молодые амбициозные проекты, в которых можно
          реализовать себя как полноценный quality assurance. Где я буду видеть
          результат своих действий и смогу влиять на сам продукт.
        </p>
        <p className="about-text-item">
          <icon>🚀</icon>13 лет уже увлекаюсь разработкой сайтов. Сначала изучил
          создание сайтов на Wordpress, затем начал изучать HTML, CSS и
          Javascript, а сейчас могу написать рукописный сайт используя
          технологии HTML/CSS/БЭМ/Sass/Javascript/Vue/React Продолжаю учиться и
          развиваться в профессиональном плане.
        </p>
        <p className="about-text-item">
          <icon>🎓</icon>Проходил обучение в Geekbrains по специальности Инженер
          по автоматизации тестирования Java и подходил к обучению со всей
          ответственностью. А сейчас прохожу курс "Веб разработчик" в Яндекс
          Практикум, для того, чтобы еще лучше тестировать веб приложения.
        </p>
        <p className="about-text-item">
          <icon>💡</icon>Я трудоголик, поэтому всегда на связи. Если не
          занимаюсь работой - значит учусь или работаю над своими pet-проектами.
          Я люблю свою работу, поэтому не выгораю!
        </p>
      </div>
    </div>
  );
}

export default About;
