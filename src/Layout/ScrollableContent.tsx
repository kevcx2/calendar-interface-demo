import React from "react";
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material';

const ScrollableContent: React.FC<{children: React.ReactNode, sx?: SxProps}> = ({ children, sx, ...rest }) => {
  return (
    <Box
      {...rest}
      sx={{
        height: "100%",
        overflowY: "hidden",
        ...sx
      }}
    >
      <Box
        sx={{
          height:"100%",
          overflowY: "auto",
          ...sx
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default ScrollableContent;


// .scrollable-content {
//   box-sizing: border-box;
//   height: calc(100% - 60px);
//   overflow-y: scroll;
// }