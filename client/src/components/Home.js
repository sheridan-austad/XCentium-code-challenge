import React from "react";
import { Title, Box } from "../styles";
import "../index.css";
import Banner from "./Banner.png";


const Home = ({ user }) => {
  return (
    <Box>
      <div>
        <Title>Welcome Back {user.name}!</Title>
        <img className='banner' src={Banner} alt="hero banner" />
      </div>
    </Box>
  );
};

export default Home;
