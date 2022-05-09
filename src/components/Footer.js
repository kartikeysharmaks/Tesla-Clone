/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
        <Menu>
        <a href="">TeslaClone@2022</a>
        <a href="">Privacy and Legal</a>
        <a href="">Vehicle Recalls</a>
        <a href="">Contact</a>
        <a href="">Career</a>
        <a href="">News</a>
        <a href="">Engage</a>
        <a href="">Locations</a>
        </Menu>
    </Container>
  );
};

const Container = styled.div`
min-height:60px;
margin-top:-20px;
display:flex;
align-items:center;
justify-content:center;
padding:10px 40px;
@media(max-width:1050px){
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
`
const Menu = styled.div`
flex:1;
display:flex;
justify-content:center;
a {
    font-weight: 600;
    font-size:14px;
    text-transform: uppercase;
    padding: 0 15px;
    flex-wrap: no-wrap;
    cursor:pointer;
    opacity:0.85;
  }
  @media(max-width:1050px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
`

export default Footer;