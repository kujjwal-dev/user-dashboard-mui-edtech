import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import DashboardCoursesTaken  from './Dashboard-Courses-Taken';
import DashboardWidgets from './Dashboard-Widgets';
import DashboardWebsiteVisits from './Dashboard-Website-Visit'
import { Link } from 'react-router-dom';

//---------------------------------------------------------------------------------------------------

export default function DashboardView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <Link to='/contentSearches'>
          <DashboardWidgets
          
            color="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 2%, rgba(0,212,255,1) 100%)"
            icon={<img alt="icon" src="open-queries.png" />}
            title="Content Searches"
          />
          </Link>
        </Grid>
        
        
        <Grid xs={12} sm={6} md={3}>
          <Link to="/courses">
          <DashboardWidgets
       
            color="info"
            icon={<img alt="icon" src="Courses.png" />}
            title="Courses"
          />
          </Link>
        </Grid>
        
        <Grid xs={12} sm={6} md={3}>
          <Link to='/progress'>
          <DashboardWidgets
         
            color="warning"
            icon={<img alt="icon" src="projects.png" />}
            title="Progress"
          />
          </Link>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
        <Link to="/profile">
          <DashboardWidgets
          
            color="error"
            icon={<img alt="icon" src="Profile.png" />}
             title="Profile"
          />
          </Link>
        </Grid>

        <Grid xs={12} md={6} lg={8}>
        <DashboardWebsiteVisits
  title="Progress"
  chart={{
    labels: [
      '2024-06-01',
      '2024-06-05',
      '2024-06-10',
      '2024-06-15',
      '2024-06-20',
      '2024-06-25',
      '2024-06-30',
    ],
    series: [
      {
        name: 'Quiz Scores',
        type: 'line',
        data: [
          80, // score for '2024-06-01'
          75, // score for '2024-06-05'
          90, // score for '2024-06-10'
          85, // score for '2024-06-15'
          70, // score for '2024-06-20'
          95, // score for '2024-06-25'
          88, // score for '2024-06-30'
        ],
      },
      {
        name: 'Completion Rate',
        type: 'line',
        data: [
          80, // completion rate for '2024-06-01'
          85, // completion rate for '2024-06-05'
          78, // completion rate for '2024-06-10'
          82, // completion rate for '2024-06-15'
          75, // completion rate for '2024-06-20'
          90, // completion rate for '2024-06-25'
          88, // completion rate for '2024-06-30'
        ],
      },
    ],
  }}
/>

        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <DashboardCoursesTaken
            title="Sections Visits"
            chart={{
              series: [
                { label: 'History', value: 4344 },
                { label: 'Geography', value: 5435 },
                { label: 'Computer', value: 1443 },
                { label: 'Mythology', value: 4443 },
              ],
            }}
          />
        </Grid>

        </Grid>
    </Container>
  );
}

