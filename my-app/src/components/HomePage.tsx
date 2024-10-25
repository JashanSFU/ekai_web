import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/HomePage.css';
import { SocialIcon } from 'react-social-icons';
import ChatInputBox from './ChatInputBox';

const HomePage: React.FC = () => {
  return (
    <Box className="display">
      <Box className="homepage">
        {/* Background gradient */}
        <Box className="bgd-gradient" />

        {/* Header section */}
        <Box className="header">
          <span className="heading">
            Hey, I'm
            <span className="headingHighlight"> Jashanraj </span>
          </span>
        </Box>

        {/* Profile */}
        <Box className="profile"></Box>

        {/* Avatar frame */}
        <Box className="avatar-frame">
          <Box className="circle1"></Box>
        </Box>
        <Box className="avatar-frame-2">
          <Box className="circle1"></Box>
        </Box>

        {/* Introduction paragraph */}
        <Box className="paragraph">
          <span className="description">
            I’m a new grad from bachelors of Computing Science at
            <span className="highlight"> SFU</span>. I am a software developer with extensive research and work experience.
          </span>
        </Box>
        {/* Chat input box */}
        <Box className="input-box">
          <ChatInputBox />
        </Box>
      </Box>
      
      {/* Bottom Box with Follow Section */}
      <Box className="bottom-box">
        <Box className="connect-section">
          <Box className="social-icons">
          <span className="connect-text">
            Follow and connect with me
          </span>
            <SocialIcon url="https://x.com" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://linkedin.com" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://instagram.com" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://mywebsite.com" style={{ height: 50, width: 50 }} />
          </Box>
          {/* Footer Text */}
          <Typography className="footer-text">
            Powered by <span className="footer-brand">Ekai</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
