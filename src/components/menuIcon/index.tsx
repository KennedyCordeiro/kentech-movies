import React from "react";
import styled from "styled-components";

const ToggleIconWrapper = styled.div`
  display: flex;
`;

const CheckboxInput = styled.input`
  display: none;
`;

const ToggleLabel = styled.label`
  position: relative;
  width: 30px;
  height: 3ch;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
`;

const Bars = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgb(221, 221, 221);
  border-radius: 4px;
`;

const BarsDark = styled(Bars)`
  background-color: #3b3b3b;
`;

const Bar1 = styled(Bars)`
  width: 50%;
`;

const Bar2 = styled(Bars)`
  width: 75%;
  transition-duration: 0.8s;
`;

const IconMenu = styled.div`
  position: absolute;
  transition-duration: 0.5s;
`;

const CheckboxCheckedToggle = styled(ToggleLabel)`
  transition-duration: 0.5s;
  transform: rotate(180deg);
`;

const CheckboxCheckedBar1 = styled(Bar1)`
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
`;

const CheckboxCheckedBar2 = styled(Bar2)`
  transform: scaleX(0);
  transition-duration: 0.1s;
`;

const CheckboxCheckedBar3 = styled(Bars)`
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
`;

interface ToggleIconProps {
  Disable: boolean;
  HandleMenu: () => void;
}

const MenuIcon: React.FC<ToggleIconProps> = ({ Disable, HandleMenu }) => {
  return (
    <ToggleIconWrapper>
      <CheckboxInput
        id="checkbox"
        type="checkbox"
        onClick={HandleMenu}
        defaultChecked={Disable}
      />
      <ToggleLabel htmlFor="checkbox">
        <Bar1 id="bar1" className="bars" />
        <Bar2 id="bar2" className="bars" />
        <Bars id="bar3" className="bars" />
      </ToggleLabel>
    </ToggleIconWrapper>
  );
};

export default MenuIcon;
