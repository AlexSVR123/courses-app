import React from "react";
import Button from "src/common/Button/Button";
import { mockedAuthorsList } from "src/dummyData";
import { Course } from "src/interface/CreateCourseProps";
import "./CourseCard.scss";

function CourseCard(props: Course) {
  const { title, description, authors, duration, creationDate } = props;
  return (
    <>
      <div className="courseCard">
        <div className="courseCard-col1">
          <div className="courseCard-title">{title}</div>
          <div className="courseCard-description">{description}</div>
        </div>
        <div className="courseCard-col2">
          <div>
            <div className="courseCard-authors">
              <span>Authors:</span>{" "}
              {mockedAuthorsList
                .filter((a) => authors.indexOf(a.id) > -1)
                .map((a) => a.name)
                .join(", ")}
            </div>
            <div className="courseCard-duration">
              <span>Duration:</span> {duration}
            </div>
            <div className="courseCard-dateCreated">
              <span>Created:</span> {creationDate}
            </div>
          </div>
          <div className="courseCard-menu">
            <Button
              title="Show course"
              onClick={() => {
                alert("show");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
