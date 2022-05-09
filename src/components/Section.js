import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
}) => {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Button>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Button>
      </Fade>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1{
    font-size:50px;
  }
  p{
    margin-top:10px;
    font-size:21px;
    letter-spacing:0.05rem;
  }
`;

const Button = styled.div`
display:flex;
flex-direction:column;
align-items:center
justify-content:center`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top:10px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 50px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.01rem;
  cursor: pointer;
  padding: 10px;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.85;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  margin-bottom: 30px;
  animation: animateDown infinite 1.5s;
`;

export default Section;
