import React from "react";
import MainPage from "./components/mainPage";
import MyContact from "./components/myContacts";
import MyProjects from "./components/myProjects";
import MySkills from "./components/mySkills";

function App() {
  return (
    <>
      <MainPage />
      <MyProjects />
      <MySkills />
      <MyContact />
    </>
  );
}

export default App;
