import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Plugin from "./pages/Plugin";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/plugin/:slug" element={<Plugin />} />
        </Routes>
      </Router>
  );
}

export default App;
