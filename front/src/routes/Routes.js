import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "../Components/Tasks/Tasks";
import CreateTask from "../Components/CreateTask/CreateTask";
import EditTask from "../Components/EditTask/EditTask";

const TaskRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default TaskRoutes;
