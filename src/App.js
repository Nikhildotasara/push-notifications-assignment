import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstScreen from "./components/FirstScreen/FirstScreen.jsx";
import MainScreen from "./components/MainScreen/MainScreen.jsx";
import Admin from "./components/Admin/Admin.jsx";
import ProtectedRoute from "./components/Admin/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        {/* <Route path="/profile" element={<MainScreen />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainScreen />} path="/profile" exact />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
