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
    { field: 'courseName', headerName: 'Course Name', flex: 1 },
    { field: 'instructor', headerName: 'Instructor', flex: 1 },
    { field: 'startDate', headerName: 'Start Date', flex: 1 },
    { field: 'endDate', headerName: 'End Date', flex: 1 },
    { field: 'progress', headerName: 'Progress', flex: 0.7 },
    { field: 'status', headerName: 'Status', flex: 1 },
    { field: 'assignments', headerName: 'Assignments', flex: 1 },
    { field: 'completionCertificate', headerName: 'Completion Certificate', flex: 1 },
  ];

  const mobileColumns = columns.filter((column) => !column.hideOnMobile).map((column) => ({
    ...column,
    flex: column.flex * 8,  // Increase the flex value for mobile
  }));

  const mockDataCourses = [
    { id: 1, courseName: 'Introduction to React', instructor: 'Priya Sharma', startDate: '2024-07-01', endDate: '2024-07-30', progress: '50%', status: 'In Progress', assignments: '2/4', completionCertificate: 'No' },
    { id: 2, courseName: 'Data Science Basics', instructor: 'Rajesh Kumar', startDate: '2024-06-15', endDate: '2024-08-15', progress: '80%', status: 'In Progress', assignments: '5/6', completionCertificate: 'No' },
    { id: 3, courseName: 'Python for Everybody', instructor: 'Anjali Verma', startDate: '2024-05-01', endDate: '2024-07-01', progress: '100%', status: 'Completed', assignments: '8/8', completionCertificate: 'Yes' },
    { id: 4, courseName: 'Machine Learning', instructor: 'Vikram Singh', startDate: '2024-07-10', endDate: '2024-09-10', progress: '0%', status: 'Not Started', assignments: '0/5', completionCertificate: 'No'},
  ];

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
            backgroundColor: 'D3D3D3',
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
            rows={mockDataCourses}
            columns={isMobile ? mobileColumns : columns}
            slots={{
              toolbar: CustomToolbar,
            }}
            pageSize={8}
            pagination
            rowsPerPageOptions={[5, 10, 20]}
            autoHeight
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CoursesView;
