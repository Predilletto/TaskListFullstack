import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskServices from "../../services/Services";

import "./Task.css";

const Task = ({ task }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(task.completed);

  const clickHandler = async () => {
    await TaskServices.complete(task.id, !state)
      .then(() => setState(!state))
      .catch((error) => console.log(error));
  };

  const removeHandler = () => {
    TaskServices.remove(task.id)
      .then(() => window.location.reload(false))
      .catch((error) => console.log(error));
  };

  let completeCheck = state ? " complete" : null;

  return (
    <div className={`task-container ${completeCheck}`}>
      <h1 className="title" onClick={() => clickHandler()}>
        {task.title}
      </h1>
      <p className="description">{task.description}</p>

      <button
        className="button-tsk"
        onClick={() => navigate("/edit-task/" + task.id)}
      >
        edit{" "}
      </button>
      <button className="button-tsk remove" onClick={removeHandler}>
        remove{" "}
      </button>
    </div>
  );
};

export default Task;
