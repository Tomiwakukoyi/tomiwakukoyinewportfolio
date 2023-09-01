import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }  w-screen  h-screen`}
    >
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home " element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
