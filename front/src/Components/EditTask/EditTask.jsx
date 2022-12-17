import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import TaskServices from "../../services/Services";

const EditTask = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const editHandler = () => {
    TaskServices.update(params.id, title, description)
    .then(() => navigate("/"))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    let teste = TaskServices.retrieve(params.id);
    teste.then((task) => {
      setDescription(task.description);
      setTitle(task.title);
    });
  }, []);

  return (
    <div className="create-task-container">
      <h1>Title</h1>
      <input
        className="input-title-box"
        type="text"
        name="Title"
        value={title}
        id="title-input"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>Description</h2>
      <textarea
        className="text-description"
        name="description"
        cols="30"
        rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="button-tsk " type="submit" onClick={editHandler}>
        {" "}
        EDIT AQUI{" "}
      </button>
      <button className="button-tsk remove" onClick={() => navigate("/")}>
        {" "}
        Cancel{" "}
      </button>
    </div>
  );
};

export default EditTask;
