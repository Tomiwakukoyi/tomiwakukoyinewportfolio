import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/[id]";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }  w-full `}
    >
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home " element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
