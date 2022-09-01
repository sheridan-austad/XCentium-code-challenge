import React from "react";
import { Title, Container, Box } from "../styles";
import "../index.css";

const Home = ({ user }) => {
  return (
    <>
      <Box>
        <Container>
          <img
            src="/XCentium_hero_banner.png"
            alt="hero banner"
            className="hero"
            // styles={{ maxWidth: "1024px", height: "100px" }}
          />
        </Container>
      </Box>
      <Box>
        <Container>
          <Title>Welcome Back {user.name}!</Title>
        </Container>
      </Box>
    </>
  );
};

export default Home;
