
import { CircularProgress, Typography, Box } from '@mui/material';

const Loader = ({ message = "Loading...", color = "primary", size = 60 }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 1000,
      }}
    >
      <CircularProgress color={color} size={size} aria-label="loading-indicator" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
