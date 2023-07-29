import React from "react";
import "./About.css";
import myPhoto from "../image/myphoto.jpg";

function About() {
  return (
    <div className="about">
      <img src={myPhoto} alt="об" className="about-photo"></img>
      <div className="about-text">
        <span className="about-text-item-first" id="about">
          🧐 Познакомимся?
        </span>
        <h2 className="about-text-h1">Обо мне</h2>
        <p className="about-text-item">
          <icon>👋</icon>Я ведущий инженер-тестировщик, специализируюсь на
          обеспечении высокого качества и надежности веб приложений, а так же
          организовываю работу всего отдела тестирования.
        </p>
        <p className="about-text-item">
          <icon>👨‍💻</icon>Я люблю молодые амбициозные проекты, в которых можно
          реализовать себя как полноценный <b>quality assurance</b>. Где я буду
          видеть результат своих действий и смогу влиять на сам продукт.
        </p>
        <p className="about-text-item">
          <icon>🚀</icon>Больше 13 лет увлекаюсь разработкой сайтов. Сначала
          изучил создание сайтов на Wordpress, затем начал изучать HTML, CSS и
          Javascript, а сейчас могу написать рукописный сайт используя
          технологии HTML/CSS/БЭМ/Sass/Javascript/Vue/React Продолжаю учиться и
          развиваться в профессиональном плане.
        </p>
        <p className="about-text-item">
          <icon>🎓</icon>Проходил обучение в <b>Geekbrains</b> по специальности{" "}
          <b>Инженер по автоматизации тестирования Java</b> и подходил к
          обучению со всей ответственностью. А сейчас прохожу курс "
          <b>Веб разработчик</b>" в <b>Яндекс Практикум</b>, для того, чтобы еще
          лучше тестировать веб приложения.
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
