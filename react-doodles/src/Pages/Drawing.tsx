import React from "react";
import Canvas from "../Components/Canvas";
import Heading from "../Components/Heading";
import Prompts from "../Components/Prompts";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f2f2f2, #ffffff);
`;

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const DrawingApp: React.FC = () => {
  return (
    <AppContainer>
      <Heading text="Doodle" />
      <Prompts />
      <CanvasContainer>
        <Canvas width={800} height={600} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10px",
          }}
        ></div>
      </CanvasContainer>
    </AppContainer>
  );
};

export default DrawingApp;
