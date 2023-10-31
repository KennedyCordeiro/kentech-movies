import React, { useState, ChangeEvent } from "react";
import "./inputStyled.css";

type SearchInputProps = {
  onSearch: (query: string) => void;
  placeholder: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ onSearch, placeholder }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([
    "kennedy",
    "sex-education",
  ]);

  const [onActive, setOnActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const handleSearch = () => {
    console.log("deu bom");
  };

  const handleInputFocus = () => {
    setOnActive(true);
  };

  const handleInputBlur = () => {
    setOnActive(false);
  };

  return (
    <div>
      <div className="input-wrapper">
        <button className="icon" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M22 22L20 20"
            ></path>
          </svg>
        </button>
        <input
          placeholder={placeholder}
          className="input"
          name="text"
          type="text"
          value={searchValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
      </div>
      {onActive && searchValue.length > 3 && (
        <div
          className="suggestions border-white"
          style={{ borderBottom: "1px solid #fffe" }}
        >
          <h3 className="bd-white border-cyan-50 text-white"> Sugestões </h3>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
