import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function DashboardWidgets({ title, icon, color, sx, ...other }) {
  return (
    <Card
      component={Stack}
      justifyContent="center" // Align content in the center horizontally
      alignItems="center" // Align content in the center vertically
      sx={{
        ...sx,
        backgroundColor: color, // Use the provided color prop for background color
        borderRadius: 2,
        px: 3,
        py: 4,
        textAlign: 'center',
        color: '#000000', // Text color
        transition: 'transform 0.2s', // Smooth transition for hover effect
        '&:hover': {
          transform: 'scale(1.05)', // Scale up a bit on hover
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Optional: Add shadow on hover
          cursor: 'pointer', // Optional: Change cursor on hover
        },
      }}
      {...other}
    >
      <Box sx={{ width: 64, height: 64, mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
    </Card>
  );
}

DashboardWidgets.propTypes = {
  color: PropTypes.string, // Accept any valid CSS color string
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string.isRequired, // Ensure title is required
};
