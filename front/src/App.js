import Header from "./Components/Header/Header";
import TaskRoutes from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <div className="teste">
      <Header />
      {<TaskRoutes />}
    </div>
  );
}

export default App;
