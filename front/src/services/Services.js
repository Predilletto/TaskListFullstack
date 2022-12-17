import axios from "axios";

class TaskServices {
  static create = async (title, description) => {
    axios
      .post("http://localhost:3030/api/tasks/", {
        title: title,
        description: description,
      })
      .catch((error) => console.log(error));
  };

  static list = async () => {
    let response = await axios
      .get("http://localhost:3030/api/tasks")
      .catch((error) => console.log(error));

    return response.data;
  };

  static retrieve = async (id) => {
    let response = await axios
      .get(`http://localhost:3030/api/task/${id}`)
      .catch((error) => console.log(error));

    return response.data;
  };

  static complete = async (id, completed) => {
    let response = await axios
      .patch(`http://localhost:3030/api/task/${id}`, {
        completed: completed,
      })
      .catch((error) => console.log(error));
    return response.data;
  };

  static update = async (id, title, description) => {
    let response = await axios
      .patch(`http://localhost:3030/api/task/${id}`, {
        title: title,
        description: description,
      })
      .catch((error) => console.log(error));
    return response.data;
  };

  static remove = async (id) => {
    let response = await axios
      .delete(`http://localhost:3030/api/task/${id}`)
      .catch((error) => console.log(error));
    return response.data;
  };
}

export default TaskServices;
