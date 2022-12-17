import axios from "axios";

const url = "http://localhost:3030/api";

class TaskServices {
  static create = async (title, description) => {
    await axios
      .post(`${url}/tasks/`, {
        title: title,
        description: description,
      })
      .catch((error) => console.log(error));
  };

  static list = async () => {
    return axios.get(`${url}/tasks`);
  };

  static retrieve = async (id) => {
    let response = await axios
      .get(`${url}/task/${id}`)
      .catch((error) => error);

    return response.data;
  };

  static complete = async (id, completed) => {
    let response = await axios
      .patch(`${url}/task/${id}`, {
        completed: completed,
      })
      .catch((error) => console.log(error));
    return response.data;
  };

  static update = async (id, title, description) => {
    let response = await axios
      .patch(`${url}/task/${id}`, {
        title: title,
        description: description,
      })
      .catch((error) => console.log(error));
    return response.data;
  };

  static remove = async (id) => {
    let response = await axios
      .delete(`${url}/task/${id}`)
      .catch((error) => console.log(error));
    return response.data;
  };
}

export default TaskServices;
