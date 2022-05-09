/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerNavOpen, setBurgerNavOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="tesla-logo" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
            <a href="" key={index}>{car}</a>
        ))}
        <a href="">Solar Roof</a>
        <a href="">Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Account</a>
        <a href="#" onClick={() => setBurgerNavOpen(true)}>
          Menu
        </a>
      </RightMenu>
        <BurgerNav show={burgerNavOpen}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerNavOpen(false)} />
          </CloseWrapper>
          <li>
            <a href="">Existing Inventory</a>
          </li>
          <li>
            <a href="">Used Inventory</a>
          </li>
          <li>
            <a href="">Trade-In</a>
          </li>
          <li>
            <a href="">Test Drive</a>
          </li>
          <li>
            <a href="">Insurance</a>
          </li>
          <li>
            <a href="">Cybertruck</a>
          </li>
          <li>
            <a href="">Roadster</a>
          </li>
          <li>
            <a href="">Semi</a>
          </li>
          <li>
            <a href="">Charging</a>
          </li>
          <li>
            <a href="">Powerwall</a>
          </li>
          <li>
            <a href="">Commercial Energy</a>
          </li>
          <li>
            <a href="">Utilities</a>
          </li>
        </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60px;
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px; 
  z-index:1;
`;

const Menu = styled.div`
  display: flex;
  left:30vw;
  align-items: center;
  flex: 1;
  justify-content: center;
  margin-left:20px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: no-wrap;
    cursor:pointer;
  }
  @media (max-width: 1050px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    cursor:pointer;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.8s;
  li {
    padding: 20px;
    font-weight: 600;
    font-size: 18px;
    opacity:0.80;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Header;
