import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "styles/App.css";
import HomePage from "pages/Home";



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  );
}

export default App;
