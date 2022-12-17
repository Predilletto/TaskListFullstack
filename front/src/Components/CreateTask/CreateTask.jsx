import { useState } from "react";

import "./CreateTask.css";
import TaskServices from "../../services/Services";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const clickHandler = () => {
    TaskServices.create(title, description)
      .then(() => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="create-task-container">
      <h1>Title</h1>
      <input
        className="input-title-box"
        type="text"
        name="Title"
        id="title-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>Description</h2>
      <textarea
        className="text-description"
        name="description"
        cols="5"
        rows="7"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button className="button-tsk " type="submit" onClick={clickHandler}>
        {" "}
        ADD{" "}
      </button>
      <button className="button-tsk remove" onClick={() => navigate("/")}>
        {" "}
        Cancel{" "}
      </button>
    </div>
  );
};

export default CreateTask;
