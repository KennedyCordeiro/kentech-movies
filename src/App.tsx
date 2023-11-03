import "./App.css";
import NavTest from "./components/navTest";
import { Outlet } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <NavTest />
      <Outlet />
    </MantineProvider>
  );
}

export default App;
