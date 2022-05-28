import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar.jsx";

import { PageWelcome } from "./subPages/PageWelcome.jsx";
import { PageBooks } from "./subPages/PageBooks.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="mainTitle">Info Site</h1>
      <Navbar />
      <Routes>
        <Route path="/welcome" element={<PageWelcome />} />
        <Route path="/books" element={<PageBooks />} />
        <Route path="/" element={<Navigate to="welcome" replace />} />
      </Routes>
    </div>
  );
}

export default App;
