import React from 'react'
import Section from './Section';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
        <Section
         title="Model S"
         description="Order Online for Touchless Delivery"
         backgroundImage="model-s.jpg"
         leftBtnText="Custom Order"
         rightBtnText="Existing Inventory"
        />
        <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImage="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
         <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImage="solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
         <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImage="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
        />
         <Section
          title="Accessories"
          backgroundImage="accessories.jpg"
          leftBtnText="Shop Now"
        />
    </Container>
  );
};

const Container = styled.div`
`

export default Home;