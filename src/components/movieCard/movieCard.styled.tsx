import styled from "styled-components";

export const StyledButton = styled.button`
  background: #fff;
  border: none;
  padding: 10px 20px;
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 120px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-5deg);
  position: relative;
  border-radius: 5px;

  span {
    display: inline-block;
    transform: skew(21deg);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: #7f5af0;
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    color: #fff;

    &::before {
      left: 0;
      right: 0;
      opacity: 1;
    }
  }
`;

export const StyledImg = styled.img``;

export const MovieCardContainer = styled.div`
  transition: 0.3s ease-out;
  &:hover {
    border: 0.5px solid white;
    transform: scale(1.05);
  }
`;
