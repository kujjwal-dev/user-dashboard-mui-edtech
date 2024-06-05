import React from 'react';
import { Box, useTheme, Typography, useMediaQuery } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import { tokens } from '../../theme/palette';
import { mockDataContacts } from '../../_mock/mockdata.js';

//------------------------------------------------------------------------------------




function CustomToolbar() {
  const theme = useTheme();
const colors = tokens(theme.palette.mode);

const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <Box sx={{ flexGrow: isMobile ? 0 : 1 }} />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'outlined' },
        }}
      />
    </GridToolbarContainer>
  );
}

const CoursesView = () => {
  const theme = useTheme();
const colors = tokens(theme.palette.mode);

const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.4 },
    { field: 'registrarId', headerName: 'Registrar ID', flex: 0.6 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      flex: 0.5,
    },
    {
      field: 'phone',
      headerName: 'Phone No.',
      flex: 0.7,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
      hideOnMobile: true,
    },
    {
      field: 'city',
      headerName: 'City',
      flex: 0.7,
      hideOnMobile: true,
    },
    {
      field: 'zipCode',
      headerName: 'ZIP Code',
      flex: 0.7,
      hideOnMobile: true,
    },
  ];

  const mobileColumns = columns.filter((column) => !column.hideOnMobile).map((column) => ({
    ...column,
    flex: column.flex * 8,  // Increase the flex value for mobile
  }));

  return (
    <Box m="15px">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Courses
      </Typography>
      <Box
        m="30px 0 0 0"
        height="75vh"
        sx={{
          overflowX: 'auto', // Enable horizontal scrolling
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
          '@media (max-width: 600px)': {
            '& .MuiDataGrid-columnHeaders': {
              display: 'block',
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            },
            '& .MuiDataGrid-cell': {
              minWidth: '150px', // Ensuring cells have a minimum width on mobile
            },
          },
        }}
      >
        <Box
          sx={{
            width: isMobile ? '200%' : '100%', // Widen the table on mobile
            overflow: 'auto',
          }}
        >
          <DataGrid
            rows={mockDataContacts}
            columns={isMobile ? mobileColumns : columns}
            slots={{
              toolbar: CustomToolbar,
            }}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesView;
