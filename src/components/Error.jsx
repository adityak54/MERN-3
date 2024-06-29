import { Box, Typography, Button } from "@mui/material";

const Error = ({ error, handleRetry }) => {
  return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        //   zIndex: 1000,
        //   position: "fixed",
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Error Occurred
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {error.message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleRetry}
        >
          Tap here to retry
        </Button>
      </Box>
    )
};

export default Error;
