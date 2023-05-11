import React, { useState } from "react";
import Button from "src/common/Button/Button";
import Search from "src/common/Search/Search";
import { Course } from "src/interface/CreateCourseProps";
import CreateCourse from "../CreateCourse/CreateCourse";
import ModalContainer from "../ModalContainer/ModalContainer";
import CourseCard from "./components/CourseCard/CourseCard";
import "./courses.scss";

function Courses(props: { items: Course[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSaveCourse = (item) => {
    props.items.push(item);
  };

  const MyModalContent = () => {
    return (
      <CreateCourse onClose={handleCloseModal} onSave={handleSaveCourse} />
    );
  };

  return (
    <>
      <div className="courses">
        <div className="courses-menu">
          <Search />
          <div className="courses-addCourse">
            <Button title="Add new course" onClick={handleOpenModal}></Button>
          </div>
        </div>
        <div className="cources-content">
          {props.items.map((item, index) => {
            return (
              <CourseCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                authors={item.authors}
                duration={item.duration}
                creationDate={item.creationDate}
              />
            );
          })}
        </div>
      </div>
      {isOpen && (
        <ModalContainer
          isOpen={isOpen}
          onClose={handleCloseModal}
          modalContent={MyModalContent}
        />
      )}
    </>
  );
}

export default Courses;
