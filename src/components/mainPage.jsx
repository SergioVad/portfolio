import React from "react";
import gitHub from "../img/projects/portfolio/github.svg";

const MainPage = () => {
  return (
    <div className="mainImage">
      <div className="blackout px-5 pt-3">
        <div className="d-flex justify-content-between">
          <div
            className="fs-5"
            style={{
              letterSpacing: "2px",
            }}
          >
            Портфолио
          </div>
          <div
            style={{ width: "400px" }}
            className="d-flex justify-content-between"
          >
            <a
              href="/#myProjects"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Проекты
            </a>
            <a
              href="/#mySkills"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Навыки
            </a>
            <a
              href="/#myContact"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Контакты
            </a>
            <a
              target={"_blank"}
              href="https://github.com/SergioVad"
              style={{
                textDecoration: "none",
                color: "white",
                letterSpacing: "5px",
              }}
            >
              <img src={gitHub} height="30px" alt="GitHub" /> GitHub
            </a>
          </div>
        </div>
        <div
          className="offset-1 d-flex align-items-center justify-content-around text-center mt-4"
          style={{ paddingTop: "100px" }}
        >
          <div style={{}}>
            <div style={{ fontSize: "25px", color: "#c09a64" }}>
              Frontend - разработчик
            </div>
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>Сергей</div>
            <div style={{ fontSize: "17px", marginBottom: "20px" }}>
              Изучаю язык программирования JavaScript 2 года. Целеустремлён,
              мотивирован дальше <br /> на работу, развитие и освоение новых
              технологий.
            </div>
            <a className="btn btn-dark" href="/#myContact">
              Контакты
            </a>
          </div>
          <div className="ball">
            <div className="circle" style={{ "--clr": "#fee800" }}></div>
            <div className="circle" style={{ "--clr": "#03a9f4" }}></div>
            <div className="circle" style={{ "--clr": "#ff2972" }}></div>
            <div className="circle" style={{ "--clr": "#04fc43" }}></div>

            <div className="circle" style={{ "--clr": "#04fc43" }}></div>
            <div className="circle" style={{ "--clr": "#fee800" }}></div>
            <div className="circle" style={{ "--clr": "#ff2972" }}></div>
            <div className="circle" style={{ "--clr": "#03a9f4" }}></div>

            <div className="circle" style={{ "--clr": "#fee800" }}></div>
            <div className="circle" style={{ "--clr": "#04fc43" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
