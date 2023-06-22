import React from "react";

const MyContact = () => {
  return (
    <div className="myContact" id={"myContact"}>
      <div
        className="d-flex flex-column align-items-center justify-content-around"
        style={{ height: "250px", paddingTop: "70px" }}
      >
        <div>
          Email - <span className="fw-bold">ivanov.sergey.vad@mail.ru</span>
        </div>
        <div>
          Тел. <span className="fw-bold">+7-906-444-79-42</span>
        </div>
        <a
          target={"_blank"}
          href="https://icancv.ru/SergeyIvanov"
          style={{ color: "white", fontWeight: "bold", display: "inline" }}
        >
          Резюме
        </a>
        <a
          target={"_blank"}
          href="https://drive.google.com/file/d/1qmIzAxjBrZ6KN6ooxvVh8KRRpP82snNT/view?usp=sharing"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Резюме (английская версия)
        </a>
        <a
          target={"_blank"}
          href="https://t.me/dissneg"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Telegram
        </a>
        <a
          target={"_blank"}
          href="https://github.com/SergioVad"
          style={{ color: "white", fontWeight: "bold" }}
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default MyContact;
