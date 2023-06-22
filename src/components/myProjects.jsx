import React from "react";
import allCategories from "../img/projects/furniture/allCategories.JPG";
import category from "../img/projects/furniture/category.JPG";
import element from "../img/projects/furniture/element.JPG";
import mainPages from "../img/projects/furniture/mainPages.JPG";
import start from "../img/projects/MK/start.JPG";
import middle from "../img/projects/MK/middle.JPG";
import end from "../img/projects/MK/end.JPG";
import registration from "../img/projects/fast-company/registration.JPG";
import all_persons from "../img/projects/fast-company/all_persons.JPG";
import current from "../img/projects/fast-company/current.JPG";
import edit from "../img/projects/fast-company/edit.JPG";
import prev from "../img/arrow-left.svg";
import next from "../img/arrow-right.svg";
import yoga_page_2 from "../img/projects/yoga/2_page.JPG";
import yoga_page_3 from "../img/projects/yoga/3_page.JPG";
import yoga_page_4 from "../img/projects/yoga/4_page.JPG";
import yoga_page_5 from "../img/projects/yoga/5_page.JPG";

const MyProjects = () => {
  return (
    <>
      <div className="myProjects pt-4" id={"myProjects"}>
        <div className="text-center fs-2 mb-5">Мои проекты</div>
        <hr />
        <div className="d-flex justify-content-around">
          <div style={{ width: "550px" }}>
            <div className="me-5 fs-4 my-4">Проект Мебельного Магазина</div>
            <div className="fw-light mb-5" style={{ minHeight: "150px" }}>
              Данный сайт позиционируется, как сайт для продажи мебели, есть все
              необходимые страницы для работы(главная страница, категории
              мебели, выбранная категория, выбранный элемент, корзина и т.д.).
              Есть возможность зарегистрироваться и авторизоваться. Так же есть
              отдельный функционал для учетных записей администратора, это
              добаление, редактирование и удаление элементов.
            </div>
            <div>
              <a
                target={"_blank"}
                href="https://github.com/SergioVad/Furniture_Shope" rel="noreferrer"
              >
                <button className="btn btn-primary me-5">
                  Репозиторий на GitHub
                </button>
              </a>
              <a target={"_blank"} href="http://mebeluxury.ru/" rel="noreferrer">
                <button className="btn btn-success">Перейти на сайт</button>
              </a>
            </div>
          </div>
          <div
            id="carouselExampleAutoplaying1"
            className="carousel carousel-dark slide"
            style={{ width: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying1"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  height="350px"
                  src={mainPages}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={allCategories}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={category}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={element}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <img
              src={prev}
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                left: "5px",
              }}
              className="btn carousel-control-prev "
              data-bs-target="#carouselExampleAutoplaying1"
              data-bs-slide="prev"
            />
            <img
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                right: "5px",
              }}
              src={next}
              className="btn carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying1"
              data-bs-slide="next"
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <div style={{ width: "550px" }}>
            <div className="me-5 fs-4 my-4">Лендинг сайт по путешествиям</div>
            <div className="fw-light mb-5" style={{ minHeight: "150px" }}>
              Данном лендинг предназначен для выбора тура по Индии. Присутствует
              функционал формы отправки информации, калькулятор, табы, таймер
              обратного отсчёта, слайдер.
            </div>
            <a target={"_blank"} href="https://github.com/SergioVad/YogaSite" rel="noreferrer">
              <button className="btn btn-primary">Репозиторий на GitHub</button>
            </a>
          </div>
          <div
            id="carouselExampleAutoplaying4"
            className="carousel carousel-dark slide"
            style={{ width: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying4"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying4"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying4"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying4"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  height="350px"
                  src={yoga_page_4}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={yoga_page_2}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={yoga_page_3}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={yoga_page_5}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <img
              src={prev}
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                left: "5px",
              }}
              className="btn carousel-control-prev "
              data-bs-target="#carouselExampleAutoplaying4"
              data-bs-slide="prev"
            />
            <img
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                right: "5px",
              }}
              src={next}
              className="btn carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying4"
              data-bs-slide="next"
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <div style={{ width: "550px" }}>
            <div className="me-5 fs-4 my-4">
              Проект по поиску людей для вечеринки
            </div>
            <div className="fw-light mb-5" style={{ minHeight: "150px" }}>
              На данном сайте можно посмотреть, кто сегодня сможет составить
              тебе компанию. У каждого персонажа есть своя профессия и свои
              качества, а также есть оценка и проведенное количество встреч.
              Есть возможность регистрации, авторизации. Встроены комментарии
              для бесед, при желании можно отредактировать свой профиль.
            </div>
            <a
              target={"_blank"}
              href="https://github.com/SergioVad/Fast_Company" rel="noreferrer"
            >
              <button className="btn btn-primary">Репозиторий на GitHub</button>
            </a>
          </div>
          <div
            id="carouselExampleAutoplaying2"
            className="carousel carousel-dark slide"
            style={{ width: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying2"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  height="350px"
                  src={all_persons}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={registration}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={current}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={edit}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <img
              src={prev}
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                left: "5px",
              }}
              className="btn carousel-control-prev"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="prev"
            />
            <img
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                right: "5px",
              }}
              src={next}
              className="btn carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying2"
              data-bs-slide="next"
            />
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <div style={{ width: "550px" }}>
            <div className="me-5 fs-4 my-4">Игра Mortal Kombat</div>
            <div className="fw-light mb-5" style={{ minHeight: "150px" }}>
              В данной игре есть возможность сыграть за героя, выбирая куда бить
              врагу и какую часть тела защищать. Количество урона может быть
              разное, при срабатывании защиты, урон вовсе не наносится.
              Реализованы комментарии после каждого хода. Игра заканчивается,
              когда у одного из игроков здоровье падает до 0 единиц.
            </div>
            <a
              target={"_blank"}
              href="https://github.com/SergioVad/Mortal_Combat" rel="noreferrer"
            >
              <button className="btn btn-primary">Репозиторий на GitHub</button>
            </a>
          </div>
          <div
            id="carouselExampleAutoplaying3"
            className="carousel carousel-dark slide"
            style={{ width: "700px" }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying3"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying3"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying3"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img
                  height="350px"
                  src={start}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={middle}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img
                  height="350px"
                  src={end}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <img
              src={prev}
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                left: "5px",
              }}
              className="btn carousel-control-prev "
              data-bs-target="#carouselExampleAutoplaying3"
              data-bs-slide="prev"
            />
            <img
              style={{
                width: "40px",
                position: "absolute",
                top: "150px",
                right: "5px",
              }}
              src={next}
              className="btn carousel-control-next"
              data-bs-target="#carouselExampleAutoplaying3"
              data-bs-slide="next"
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default MyProjects;
