import { useState } from "react";
import "./App.css";
import { Button } from "@mantine/core";
import Navbar from "./components/navbar";
import NavTest from "./components/navTest";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <NavTest></NavTest>
      <Home></Home>
    </div>
  );
}

export default App;
