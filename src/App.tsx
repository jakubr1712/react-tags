import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "styles/App.css";
import HomePage from "pages/Home";
import { AppProvider } from "contexts/globalContext";

const Test = () => {
  return <div>App</div>;
};

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:test" element={<Test />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
