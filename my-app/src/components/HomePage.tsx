// import React, { useState } from 'react';
// import { Box, Typography, Avatar, Button, IconButton } from '@mui/material';
// import { LinkedIn, Instagram, Language } from '@mui/icons-material';
// import '../styles/HomePage.css';
// import '../styles/common.css';
// import Chatbox from './Chatbox';

// const HomePage: React.FC = () => {
//   const [showChat, setShowChat] = useState<boolean>(false);
//   return (
//     <Box className="homepage-container">
//       <Box className="text-section">
//         <Typography variant="h2" className="greeting">
//           Hey, I'm <span className="highlight">Ash</span>
//         </Typography>
//         <Typography variant="h5" className="description">
//           I'm a seasoned technology operator & entrepreneur currently building <span className="highlight">Ekai</span> to help teams focus on what truly matters.
//         </Typography>
//         <Box className="action-buttons">
//           <Button variant="contained" color="primary" className="cta-button">
//             Ask me anything
//           </Button>
//           <Button variant="outlined" className="cta-button">
//             Build my own Ekai
//           </Button>
//         </Box>
//       </Box>
//       <Box className="avatar-section">
//         <Avatar 
//           src="https://via.placeholder.com/150" 
//           alt="Ash" 
//           className="avatar"
//         />
//       </Box>
//       <Box className="social-icons">
//         <IconButton color="inherit">
//           <LinkedIn />
//         </IconButton>
//         <IconButton color="inherit">
//           <Instagram />
//         </IconButton>
//         <IconButton color="inherit">
//           <Language />
//         </IconButton>
//       </Box>
//       {showChat && <Chatbox onClose={() => setShowChat(false)} />}
//     </Box>
//   );
// }

// export default HomePage;
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/HomePage.css';
import { SocialIcon } from 'react-social-icons';
import ChatInputBox from './ChatInputBox';

const HomePage: React.FC = () => {
  const [showChatbox, setShowChatbox] = useState(false);

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
