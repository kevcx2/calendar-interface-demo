import React from 'react';
import CalendarMonth from "./Calendar/CalendarMonth";
import ScrollableContent from "./Layout/ScrollableContent";
import { Sidebar } from './Layout/Sidebar';
import DemoSidebar from './DemoSidebar'
import Navbar from './Navbar'
import FakeFilterBar from './FakeFilterBar'
import { SidebarProvider } from './Layout/sidebarState';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {
  return (
    <>
    <Navbar />
    <Box
      sx={{
        height: '96px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e0e0e0',
        padding: '15px 40px',
        boxSizing: 'border-box'
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 600 }}
      >
        Scheduling
      </Typography>
      <Tabs value={"1"} textColor="primary" indicatorColor="primary">
        <Tab label="Schedule" value="1" />
        <Tab label="Shifts" value="2" />
        <Tab label="Rules" value="3" />
      </Tabs>
    </Box>
    <Box sx={{height: 'calc(100% - 141px)'}}>
      <SidebarProvider>
        <div style={{height: '100%', display: 'flex'}}>
          <FakeFilterBar />
          <ScrollableContent sx={{ flex: 1}}>
            <CalendarMonth/>
          </ScrollableContent>
          <Sidebar.Base />
          <DemoSidebar />
        </div>
      </SidebarProvider>
    </Box>
    </>
  )
}

