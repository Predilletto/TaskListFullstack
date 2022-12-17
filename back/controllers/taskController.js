const firebase = require("../db");
const Task = require("../models/tasks");
const firestore = firebase.firestore();

const addTask = async (req, res) => {
  try {
    const data = req.body;
    data.completed = false;
    data.creationDate = new Date();
    await firestore.collection("tasks").doc().set(data);
    res.sendStatus(201);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await firestore.collection("tasks");
    const data = await tasks.get();
    const tasksList = [];
    if (data.empty) {
      res.status(404).send("no data");
    } else {
      data.forEach((doc) => {
        const task = new Task(
          doc.id,
          doc.data().title,
          doc.data().description,
          doc.data().completed,
          new Date(doc.data().creationDate.seconds * 1000)
        );
        tasksList.push(task);
      });
      res.send(tasksList);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await firestore.collection("tasks").doc(id);
    const data = await task.get();
    if (!data.exists) {
      res.status(404).send("Task Not Found");
    } else {
      let taskin = new Task(
        data.id,
        data.data().title,
        data.data().description,
        data.data().completed,
        new Date(data.data().creationDate.seconds * 1000)
      );
      res.send(taskin);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const task = await firestore.collection("tasks").doc(id);
    await task.update(data);
    res.send("Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    await firestore.collection("tasks").doc(id).delete();
    res.send("Record deleted successfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
