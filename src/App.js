import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./components/Success";
import RForm from "./components/RForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
