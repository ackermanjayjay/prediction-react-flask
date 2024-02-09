import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./predictions/components/Navbar";
import Home from "./predictions/views/HomePages";
import PredictionPage from "./predictions/views/PredictionPages";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<PredictionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
