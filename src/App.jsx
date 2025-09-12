import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Plugin from "./pages/Plugin";
import Search from "./pages/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; // ✅ import
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/plugin/:slug" element={<Plugin />} />
        <Route path="/search/" element={<Search />} />
      </Routes>
      <Footer /> {/* ✅ added */}
    </Router>
  );
}

export default App;
