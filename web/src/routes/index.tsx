import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tasks } from "@/pages";

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Tasks />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
