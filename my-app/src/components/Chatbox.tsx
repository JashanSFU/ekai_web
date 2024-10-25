import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import '../styles/Chatbox.css';
import CloseIcon from '@mui/icons-material/Close'; // Import the cross icon
import { useNavigate } from 'react-router-dom';
import ChatInputBox from './ChatInputBox';

const ChatPage: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle cross button click
  const handleClose = () => {
    navigate('/'); // Redirect to HomePage
  };

  return (
    <Box className="chat-page">
      {/* Header */}
      <Box className="chat-header">
        <Typography variant="h4" className="chat-title">
          Let's Chat
        </Typography>
        <Box className="social-icons">
          <SocialIcon url="https://linkedin.com" />
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://mywebsite.com" />
          <SocialIcon url="https://x.com" />
          <IconButton onClick={handleClose} className="close-icon">
            <CloseIcon style={{ fontSize: '28px', color: '#000' }} />
          </IconButton>
        </Box>
      </Box>

      {/* User Info */}
      <Box className="user-info">
        <img src="/profile.jpg" alt="User" className="user-image" />
        <Typography className="user-name">Jashanraj Singh</Typography>
      </Box>

      {/* Chat Cards */}
      <Box className="chat-cards">
        <Box className="card">
          <Typography className="card-title">Book a meeting with me</Typography>
          <Typography className="card-subtitle">Let's get on a call</Typography>
        </Box>
        <Box className="card">
          <Typography className="card-title">Learn how I help</Typography>
          <Typography className="card-subtitle">Is Ekai the right tool for me?</Typography>
        </Box>
        <Box className="card">
          <Typography className="card-title">Learn what I do</Typography>
          <Typography className="card-subtitle">What does Ekai do?</Typography>
        </Box>
      </Box>

      {/* Shuffle Button */}
      <Typography className="shuffle-text">Shuffle</Typography>

      {/* Chat Input Section */}
      <Box className="chat-input-section">
        <Box className="prompt">Jashanraj's Ekai is typing...</Box>
        <ChatInputBox></ChatInputBox>
      </Box>

      {/* Footer */}
      <Box className="footer">
        <Typography className="footer-text">
          Powered by <span className="footer-brand">Ekai</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatPage;
