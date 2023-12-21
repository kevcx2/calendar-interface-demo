import React from 'react';
import MiniCalendar from "./Calendar/MiniCalendar";
import ScrollableContent from "./Layout/ScrollableContent";

import styled from "@emotion/styled";
import { styled as muiStyled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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

export default FakeFilterBar
