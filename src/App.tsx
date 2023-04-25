import React, { useEffect } from 'react';
import CalendarMonth from "./Calendar/CalendarMonth";
import MiniCalendar from "./Calendar/MiniCalendar";
import ScrollableContent from "./Layout/ScrollableContent";
import { Sidebar } from './Layout/Sidebar';
import { useSidebar } from './Layout/sidebarService';
import Navbar from './Navbar'

import styled from "@emotion/styled";
import { styled as muiStyled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { spacing } from '@mui/system';

const FilterLabel = muiStyled(Typography)`
  font-weight: 600;
  color: #616161;
  padding-left: 20px;
  padding-top: 40px;
  padding-bottom: 10px;
`;

const Filters = styled.div`
  padding: 20px;
  padding-top: 10px;
`

const MiniCal = styled.div`
  padding: 10px;
`

const FakeFilterBar = () => {
  return (
    <ScrollableContent>
      <div style={{
          width: '200px',
          backgroundColor: '#f5f5f5',
          minHeight: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid #e0e0e0'
        }}>
        <MiniCal>
          <MiniCalendar />
        </MiniCal>
        <Divider />
        <div>
          <FilterLabel sx={{ padding: '20px 20px 0px 20px' }} variant="body1">Filters</FilterLabel>
          <Filters>
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Filter 1" />
              <FormControlLabel control={<Checkbox />} label="Filter 2" />
              <FormControlLabel control={<Checkbox />} label="Filter 3" />
            </FormGroup>
          </Filters>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              { label: 'The Shawshank Redemption', year: 1994 },
              { label: 'The Godfather', year: 1972 },
              { label: 'The Godfather: Part II', year: 1974 },
              { label: 'The Dark Knight', year: 2008 }
            ]}
            sx={{ padding: "20px 10px" }}
            renderInput={(params) => <TextField {...params} label="Fake Filter" />}
          />
        </div>
        <div>
        </div>
      </div>
    </ScrollableContent>
  )
}

export default function App() {
  const { setIsSidebarOpen } = useSidebar()
  useEffect(() => {
    setIsSidebarOpen(true)
  }, [setIsSidebarOpen])

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
    <div style={{height: '100%', display: 'flex'}}>
      <FakeFilterBar />
      <ScrollableContent sx={{ flex: 1}}>
        <CalendarMonth/>
      </ScrollableContent>
        <Sidebar.Base />
        <Sidebar.Show>
          <Sidebar.Header>
            <Skeleton animation={false} variant="rectangular" height={30} width={200} />
          </Sidebar.Header>
            <Stack sx={{ margin: '20px' }} spacing={1}>
            <div>Once closed, you will need to refresh the page to reopen the sidebar</div>
            <Skeleton animation={false} variant="circular" width={40} height={40} />
            <Skeleton animation={false} variant="rectangular" width={'100%'} height={60} />
            <Skeleton animation={false} variant="rounded" width={'100%'} height={500} />
            </Stack>
        </Sidebar.Show>
    </div>
    </Box>
    </>
  )
}

