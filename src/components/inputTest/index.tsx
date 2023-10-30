import React, { useState, useEffect } from "react";

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    // Carrega o histórico de pesquisa ao montar o componente
    const savedSearchTerm = localStorage.getItem("searchTerm");
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  // Salva o histórico de pesquisa sempre que o searchTerm for alterado
  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={`w-40 p-2 bg-transparent rounded-full border focus:border-custom focus:outline-none ${
          isFocused ? "border-custom" : "border-gray-300"
        }`}
      />
    </div>
  );
};

export default SearchInput;
