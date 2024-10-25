import React from 'react';
import { Box, Typography, Button, InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import '../styles/ChatInputBox.css';
import { useNavigate } from 'react-router-dom';

const ChatInputBox: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle send button click
  const handleSend = () => {
    navigate('/chat'); // Redirect to ChatPage
  };
  return (
    <Box className="chat-input-box">
      {/* Profile image and prompt */}
      <Box className="profile-prompt">
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <Typography className="prompt-text">Ask me anything</Typography>
      </Box>

      {/* Borderless Input field */}
      <InputBase
        placeholder="how can Ekai help me?"
        className="chat-input"
        sx={{
          borderRadius: '20px',
          backgroundColor: '#f9f9f9',
          padding: '10px 15px',
          fontSize: '16px',
          flex: 1,
        }}
      />

      {/* Send Button */}
      <Button className="send-button" onClick={handleSend}>
        <SendIcon style={{ color: '#F8C08E' }} />
      </Button>

      {/* Build my own Ekai Button */}
      <Button variant="contained" className="build-ekai-button">
        Build my own Ekai
      </Button>
    </Box>
  );
};

export default ChatInputBox;
