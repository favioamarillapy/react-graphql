import logo from "./logo.svg";
import "./App.css";
import Courses from "./Courses";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header-title">Hello Vite + React + GraphQL!</p>

        <Courses />
      </header>
    </div>
  );
}

export default App;
