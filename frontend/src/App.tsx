import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainSelector from "./MainSelector";
import { Title } from "./TestHeader";
import { Container } from "@mui/system";
import Listing from "./Listing";
import UploadImage from "./UploadImage";
import FetchQuery from "./FetchQuery";

function App() {
  const rootStyles = {
    backgroundColor: "#002145", // Change this to the desired background color
    minHeight: "100vh", // Ensures the background covers the full viewport height
  };

  return (
    <div style={rootStyles}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title />

        <MainSelector />
        <UploadImage />
        <FetchQuery />

      </Container>
    </div>
  );
}

export default App;
