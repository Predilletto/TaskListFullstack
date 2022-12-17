import Task from "../Task/Task";
import TaskServices from "../../services/Services";
import { useState, useEffect } from "react";

import "./Tasks.css";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let response = TaskServices.list();
    response.then((tasks) => {
      let tasksSorted = tasks.sort((x, y) => {
        x = new Date(x.creationDate);
        y = new Date(y.creationDate);
        return y.getTime() - x.getTime();
      });
      setTasks(tasksSorted);
    });
  }, []);

  return (
    <div className="tasks-container">
      <button
        className="button-tsk create"
        onClick={() => navigate("/create-task")}
      >
        {" "}
        Create New Task{" "}
      </button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}{" "}
    </div>
  );
};

export default Tasks;
