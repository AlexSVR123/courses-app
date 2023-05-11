import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Courses from "./components/Courses/Courses";
import { mockedCoursesList } from "./dummyData";

function App() {
  return (
    <>
      <Header />
      <Courses items={mockedCoursesList} />
    </>
  );
}

export default App;
