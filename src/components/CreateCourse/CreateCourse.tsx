import React, { useState } from "react";
import Button from "src/common/Button/Button";
import Input from "src/common/Input/Input";
import { Course } from "src/interface/CreateCourseProps";
import "./CreateCourse.scss";

type CreateCourseProps = {
  onClose: () => void;
  onSave: (data: Course) => void;
};

function CreateCourse(props: CreateCourseProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState<number | null>(null);
  const [durationInput, setDurationInput] = useState("");
  const [editingDuration, setEditingDuration] = useState(false);

  const handleSave = () => {
    const data = {
      id: "1",
      title: title,
      description: description,
      duration: duration,
      authors: [],
      creationDate: "",
    } as Course;

    props.onSave(data);
    props.onClose();
  };

  const formatDuration = (duration: string): number | null => {
    if (!duration) {
      return null;
    }

    const minutes = parseInt(duration, 10);
    if (isNaN(minutes)) {
      return null;
    }

    return minutes;
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDurationInput(value);

    const parsedDuration = formatDuration(value);
    setDuration(parsedDuration);
  };

  const handleDurationBlur = () => {
    setEditingDuration(false);
    const parsedDuration = formatDuration(durationInput);
    setDuration(parsedDuration);
  };

  const handleDurationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEditingDuration(false);
      const parsedDuration = formatDuration(durationInput);
      setDuration(parsedDuration);
    }
  };
  return (
    <>
      <div className="CreateCourse-header">Add new course</div>
      <div className="CreateCourse-content">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Input
          label="Duration"
          value={
            editingDuration
              ? durationInput
              : duration !== null
              ? `${Math.floor(duration / 60)}:${(duration % 60)
                  .toString()
                  .padStart(2, "0")}`
              : ""
          }
          onChange={handleDurationChange}
          onBlur={handleDurationBlur}
          onKeyDown={handleDurationKeyDown}
          onFocus={() => setEditingDuration(true)}
        />
      </div>
      <div className="CreateCourse-actions">
        <Button title="Save" onClick={handleSave} />
        <Button title="Cancel" onClick={props.onClose} />
      </div>
    </>
  );
}

export default CreateCourse;
