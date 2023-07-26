import React from "react";
import "./Promo.css";
import github from "../image/github.png";
import telegram from "../image/telegram_logo_circle_icon_134012.png";
import linkedin from "../image/linkedin.png";
import vk from "../image/1486147202-social-media-circled-network10_79475.png";
import photo from "../image/AvatarAndIcons (1).png";

function Promo() {
  return (
    <div className="promo">
      <div className="promo-left">
        <div className="promo-left-hello">
          <span className="promo-left-hello-text" id="main">
            <icon>👋</icon> Добрый день!
          </span>
        </div>
        <div className="promo-left-name">Зимин Александр</div>
        <div className="promo-left-job">
          Ведущий инженер тестировщик Senior QA engineer
        </div>
        <div className="promo-left-icons">
          <ul className="promo-left-icons-list">
            <a href="https://github.com/AleksandrZimin" target="_blanck">
              <li className="promo-left-icons-list-item">
                <img src={github} alt="github"></img>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/aleksandr-zimin/"
              target="_blanck"
            >
              <li className="promo-left-icons-list-item">
                <img src={linkedin} alt="linkedin"></img>
              </li>
            </a>
            <a href="https://t.me/Aleksandr_sw" target="_blanck">
              <li className="promo-left-icons-list-item">
                <img src={telegram} alt="telegram"></img>
              </li>
            </a>
            <a href="https://vk.com/sw.prod" target="_blanck">
              <li className="promo-left-icons-list-item">
                <img src={vk} alt="vk"></img>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="promo-center">
        <img src={photo}></img>
      </div>
      <div className="promo-right">
        <a href="https://hh.ru/resume_converter/%D0%97%D0%B8%D0%BC%D0%B8%D0%BD%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%20%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=72c8fa6dff096d51de0039ed1f5a4a37753876&type=pdf&hhtmSource=resume&hhtmFrom=resume_list">
          <span>Скачать резюме</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 2V11.5"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 7L8 11.5L12.5 7"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 13.5H13.5"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a href=" tel:+79858098957" className="promo-right-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.25626 16.5937C3.13959 14.7098 2.74899 12.483 3.1578 10.3314C3.5666 8.17982 4.74669 6.25145 6.47652 4.9083C8.20636 3.56516 10.367 2.8996 12.5527 3.03658C14.7385 3.17357 16.7991 4.10367 18.3477 5.65227C19.8963 7.20088 20.8264 9.26149 20.9634 11.4473C21.1004 13.633 20.4348 15.7937 19.0917 17.5235C17.7486 19.2533 15.8202 20.4334 13.6686 20.8422C11.5171 21.251 9.29025 20.8604 7.40626 19.7437V19.7437L4.29376 20.625C4.16624 20.6623 4.03103 20.6646 3.90231 20.6317C3.77359 20.5987 3.6561 20.5318 3.56215 20.4379C3.4682 20.3439 3.40126 20.2264 3.36833 20.0977C3.33541 19.969 3.33771 19.8338 3.37501 19.7062L4.25626 16.5937Z"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.2594 17.25C13.2726 17.2525 12.295 17.0599 11.3828 16.6834C10.4706 16.3069 9.64176 15.7539 8.94395 15.0561C8.24615 14.3583 7.69311 13.5295 7.3166 12.6173C6.9401 11.7051 6.74755 10.7275 6.75002 9.74062C6.7525 9.04605 7.03016 8.38078 7.52217 7.89052C8.01419 7.40027 8.68045 7.12499 9.37502 7.125V7.125C9.48962 7.12408 9.60234 7.15407 9.70133 7.21182C9.80032 7.26956 9.88191 7.35292 9.93752 7.45312L11.0344 9.36562C11.0996 9.48188 11.1331 9.61327 11.1315 9.74657C11.1298 9.87987 11.0931 10.0104 11.025 10.125L10.1438 11.5969C10.5952 12.601 11.399 13.4049 12.4031 13.8562L13.875 12.975C13.9896 12.9069 14.1202 12.8702 14.2535 12.8686C14.3868 12.8669 14.5181 12.9004 14.6344 12.9656L16.5469 14.0625C16.6471 14.1181 16.7305 14.1997 16.7882 14.2987C16.8459 14.3977 16.8759 14.5104 16.875 14.625C16.8726 15.3188 16.5965 15.9837 16.1068 16.4751C15.6171 16.9666 14.9532 17.2451 14.2594 17.25V17.25Z"
              stroke="#7B4AE2"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Позвонить</span>
        </a>
      </div>
    </div>
  );
}

export default Promo;
