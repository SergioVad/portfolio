import React from "react";
import js from "../img/projects/portfolio/skills/js.png";
import html from "../img/projects/portfolio/skills/html.png";
import css from "../img/projects/portfolio/skills/css.png";
import node from "../img/projects/portfolio/skills/node.png";
import react from "../img/projects/portfolio/skills/react.png";
import different from "../img/projects/portfolio/skills/different.png";

const MySkills = () => {
  return (
    <div className="mySkills pt-4" id="mySkills">
      <div className="text-center fs-2 mb-5">Мои навыки</div>
      <div className="d-flex flex-wrap justify-content-center mx-5">
        <div
          className="col-3 card text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={js} alt="js" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">Java Script</div>
            <div className="card-text">
              Хорошее понимание JS. Также практикуюсь решать алгоритмы данного
              языка.
            </div>
          </div>
        </div>

        <div
          className="card col-3 text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={html} alt="html" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">HTML5</div>
            <div className="card-text">
              Сильные навыки языка гипертекстовой разметки.
            </div>
          </div>
        </div>
        <div
          className="card col-3 text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={css} alt="css" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">CSS3</div>
            <div className="card-text">
              Сильные навыки каскадной таблицы стилей. Использую препроцессор
              SASS.
            </div>
          </div>
        </div>
        <div
          className="card col-3 text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={react} alt="react" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">REACT</div>
            <div className="card-text">
              Использую в сочетании с фреймворком Bootstrap5.
            </div>
          </div>
        </div>

        <div
          className="card col-3 text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={node} alt="node" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">NODE.JS</div>
            <div className="card-text">
              Использую с фреймворком Express.js и базой данных MongoDB.
            </div>
          </div>
        </div>
        <div
          className="card col-3 text-center d-flex justify-content-center align-items-center"
          style={{
            border: "none",
            backgroundColor: "rgb(232, 229, 229)",
            height: "236px",
            fontWeight: "300",
            fontSize: "15px",
            margin: "20px",
          }}
        >
          <img width="100px" src={different} alt="different" />
          <div className="card-body">
            <div className="card-title fw-bold fs-3">Ещё технологии</div>
            <div className="card-text">
              Есть опыт работы с Docker, Firebase, Webpack.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
