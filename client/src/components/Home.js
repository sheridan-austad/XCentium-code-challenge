import React from "react";
import { Title, Box } from "../styles";
// import "../index.css";

const Home = ({ user }) => {
  return (
    <Box>
      <div
        className="hero-image"
        style={{ 
          backgroundImage: "url(/'https://www.pixelstalk.net/wp-content/uploads/2016/06/Technology-Wallpaper.jpg')",
          // height: 100%,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
        }}
      >
          <Title>Welcome Back {user.name}!</Title>

      </div>
    </Box>
  );
};

export default Home;
