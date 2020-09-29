import { Box } from '@chakra-ui/core';
import React from 'react'

interface MenuButtonProps {
  handleToggle: () => void;
}

 const MenuButton: React.FC<MenuButtonProps> = ({handleToggle}) => {
    return ( 
         <Box display="block" onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

    );
}

export default MenuButton;