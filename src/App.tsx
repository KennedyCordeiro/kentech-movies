import { useState } from "react";
import "./App.css";
import { Button } from "@mantine/core";
import Navbar from "./components/navbar";
import NavTest from "./components/navTest";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <NavTest></NavTest>

      <Outlet />
    </div>
  );
}

export default App;
