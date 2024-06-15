import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "styles/App.css";
import HomePage from "pages/Home";

const Test = () => {
  return <div>Test</div>;
};

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:test" element={<Test />} />
        </Routes>
      </Router>
  );
}

export default App;
