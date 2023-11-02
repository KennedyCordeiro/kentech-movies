import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1em 1em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #7f5af0;
  background-color: transparent;
  width: 250px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    letter-spacing: 2px;
    width: 250px;
    font-size: 12px;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.03);
    outline: 2px solid #7f5af0;
    box-shadow: 4px 5px 17px -4px #7f5af0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #7f5af0;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 700ms;
  }

  &:hover::before {
    width: 150%;
  }
`;

const DivButton = styled.div`
  margin-top: 60px;

  @media screen and (max-width: 900px) {
    margin-top: 40px;
  }
`;

interface Section {
  Text: string;
  Onclick: () => void;
}

const ButtonStyled: React.FC<Section> = ({ Text, Onclick }) => {
  return <StyledButton onClick={Onclick}>{Text}</StyledButton>;
};

export default ButtonStyled;
