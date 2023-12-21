import React, { useState, useEffect, useRef } from "react";
import "./sidebar.css";
import ScrollableContent from "./ScrollableContent";
import { useSidebarContext } from './sidebarState';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MAX_SIDEBAR_WIDTH = 700;
const MIN_SIDEBAR_WIDTH = 275;
const DEFAULT_WIDTH = 350;

const Base: React.FC = () => {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const isResizingRef = useRef(false);
  
  const { isSidebarOpen, sidebarContent } = useSidebarContext();

  const handleMouseDown = () => {
    isResizingRef.current = true;
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    if (!sidebarRef.current) return;
    event.preventDefault();
    let newWidth = sidebarRef.current.getBoundingClientRect().right - event.pageX;
    newWidth = Math.min(newWidth, MAX_SIDEBAR_WIDTH);
    newWidth = Math.max(newWidth, MIN_SIDEBAR_WIDTH);

    newWidth = keepWidthInStickyResizeArea(newWidth);
    setWidth(newWidth);
  };

  const keepWidthInStickyResizeArea = (width: number) => {
    const STICKY_RESIZE_DISTANCE = 15;
    const newWidthIsSlightlyGreaterThanDefault =
      width > DEFAULT_WIDTH && width < DEFAULT_WIDTH + STICKY_RESIZE_DISTANCE;
    const newWidthIsSlightlyLessThanDefault =
      width < DEFAULT_WIDTH && width > DEFAULT_WIDTH - STICKY_RESIZE_DISTANCE;
    if (
      newWidthIsSlightlyGreaterThanDefault ||
      newWidthIsSlightlyLessThanDefault
    ) {
      return DEFAULT_WIDTH;
    } else {
      return width;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      className="sidebar"
      sx={{
        width: `${width}px`,
        display: isSidebarOpen ? 'initial' : 'none',
        backgroundColor: 'white',
      }}
      ref={sidebarRef}
    >
      <div
        className="resize-border"
        onMouseDown={handleMouseDown}
        onDoubleClick={() => setWidth(DEFAULT_WIDTH)}
      >
        <div className="resize-border-line" />
      </div>
      <ScrollableContent>
        <div className="sidebar-body">
          {sidebarContent}
        </div>
      </ScrollableContent>
    </Box>
  );
};

const Close: React.FC = () => {
  const { closeSidebar } = useSidebarContext();
  const onClose = () => closeSidebar();

  return (
    <IconButton color="warning" onClick={onClose}>
      <CloseIcon fontSize="medium"/>
    </IconButton> 
  )
}

const Header: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '15px 15px 15px 20px',
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: '500', marginTop: '5px' }}
      >
        {children}
      </Typography>
      <Close />
    </Box>
  )
}

export const Sidebar = {
  Base,
  Close,
  Header,
}
