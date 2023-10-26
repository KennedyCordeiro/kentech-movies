import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const showMenu = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

const hideMenu = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-family: "Euclid Circular A", "Poppins";
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;

  &.black-background {
    background-color: #121212c1;
    animation: ${showMenu} 0.2s ease-in-out;

    @media screen and (max-width: 900px) {
      background-color: transparent;
      animation: 0s;
    }
  }

  @media screen and (max-width: 900px) {
    background-color: transparent !important;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 240px;
  margin-top: 10px;

  @media screen and (max-width: 900px) {
    margin-right: 0px;
    margin-top: 0px;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const DivIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    margin-right: 10px;
    position: absolute;
    display: flex;
    top: 20px;
    right: 20px;
    z-index: 1;
  }
`;

const NavIconsSmart = styled.div<{ menuSmart: boolean }>`
  display: none;

  @media screen and (max-width: 900px) {
    opacity: ${(props) => (props.menuSmart ? "1" : "0")};
    transform: translateY(${(props) => (props.menuSmart ? "0" : "-100%")});
    transition: opacity 0.5s ease-in-out;
    top: 0px;
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: #27272758;
    gap: 20px;
    flex-direction: column;
    backdrop-filter: blur(20px);
    animation: ${(props) =>
      props.menuSmart
        ? `${showMenu} 0.5s ease-in-out`
        : `${hideMenu} 0.5s ease-in-out`};
    gap: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transition: 0.5s;
    font-size: 28px;
  }
`;

const StyledLink = styled(ScrollLink)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  font-size: 18px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d7d7d7;
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::before {
    top: -3px;
    transform-origin: left;
  }

  &::after {
    bottom: -3px;
    transform-origin: right;
  }

  &:hover::before,
  &:hover::after,
  &.active::before,
  &.active::after {
    transform: scaleX(1);
  }
`;

export { NavWrapper, NavContainer, List, DivIcon, NavIconsSmart, StyledLink };
