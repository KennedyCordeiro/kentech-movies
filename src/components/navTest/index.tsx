import {
  NavWrapper,
  List,
  DivIcon,
  StyledLink,
  NavContainer,
  NavIconsSmart,
  DivSearch,
} from "./NavTest.styled";
import { useState, useEffect } from "react";
import MenuIcon from "../menuIcon";
import SearchInput from "../searchInput";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

interface Section {
  id: string;
  label: string;
}

const NavTest: React.FC = () => {
  // para adicionar uma nova seção é só colocar mais 1 seção no array 😎
  const sections: Section[] = [{ id: "/Home", label: "Home" }];
  const [menuSmart, setMenuSmart] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  const handleMenu1 = () => {
    setMenuSmart((prevState) => !prevState);
  };

  const handleSearch = (query: string) => {
    // Lógica para executar a pesquisa com o termo "query"
    console.log(`Pesquisando por: ${query}`);
  };

  return (
    <NavWrapper>
      <NavContainer>
        <List>
          {sections.map((section) => (
            <StyledLink
              key={section.id}
              to={section.id}
              onClick={() => handleSetActiveLink(section.id)}
            >
              {section.label}
            </StyledLink>
          ))}
        </List>
      </NavContainer>
      <DivSearch>
        <SearchInput onSearch={handleSearch} placeholder={"Busque um filme"} />
      </DivSearch>
      <DivIcon>
        <MenuIcon Disable={menuSmart} HandleMenu={handleMenu1}></MenuIcon>
      </DivIcon>

      <NavIconsSmart as="div" menuSmart={menuSmart}>
        {sections.map((section) => (
          <StyledLink
            key={section.id}
            to={section.id}
            onClick={() => {
              handleSetActiveLink(section.id);
            }}
            className={activeLink === section.id ? "link active" : "link"}
          >
            {section.label}
          </StyledLink>
        ))}
      </NavIconsSmart>
    </NavWrapper>
  );
};

export default NavTest;
