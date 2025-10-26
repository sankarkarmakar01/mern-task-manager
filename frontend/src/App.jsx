import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddTask from "./components/AddTask";
import UpdateTask from "./components/UpdateTask";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/updateTask/:id" element={<UpdateTask />} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
