import { useState } from "react";
import * as C from "./home.styled";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <C.ContainerHome className="container-home">
      <div className="h-screen overflow-y-auto bg-slate-900"></div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Carregar mais
        </span>
      </button>
    </C.ContainerHome>
  );
};

export default Home;
