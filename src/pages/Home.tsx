// Home.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../../assets/images/background-right.svg')",
      }}
    >
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">
          Bem-vindo à Página Inicial
        </h1>
      </div>
    </div>
  );
};

export default Home;
