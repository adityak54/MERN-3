import { useState } from "react";
import {
  Box,
  Avatar,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated } from "react-spring";

const UserPost = (props) => {
  const [selected, setSelected] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Animation for the avatar
  const avatarSpringProps = useSpring({
    // transform: selected ? "translateX(-10px)" : "translateX(0)", // Adjusted distance
    config: { tension: 300, friction: 15 },
  });

  // Animation for the details
  const detailsSpringProps = useSpring({
    transform: selected ? "translateX(0)" : "translateX(80px)", // Adjusted distance
    opacity: selected ? 1 : 0,
    config: { tension: 300, friction: 15 },
  });

  return (
    <>
      <Paper
        onClick={handleSelect}
        sx={{
          padding: 2,
          cursor: "pointer",
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
          transition: "all 0.3s ease-in-out",
          backgroundColor: selected
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.8)",
          color: "black",
          overflow: "hidden", // Ensures content stays within bounds
        }}
      >
        <animated.div style={avatarSpringProps}>
          <Avatar
            src={props.userdata.avatar}
            alt={props.userdata.profile.username[0]}
            sx={{
              width: selected ? 120 : 56,
              height: selected ? 120 : 56,
              transition: "width 0.3s, height 0.3s",
              border: "2px solid black",
            }}
            onClick={handleOpen}
          />
          <h1>{props.userdata.profile.username}</h1>
        </animated.div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Align details to the start
            justifyContent: "center",
            textAlign: "left", // Align text to the left
            width: "100%", // Allow full width
            ml: 2, // Space between avatar and details
          }}
        >
          <animated.div style={detailsSpringProps}>
            {selected && (
              <Box
                sx={{
                  height: { md: "270px" },
                  width: "100%", // Full width to accommodate details
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  textAlign: "left",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <List sx={{ width: "100%" }}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                      <ListItem sx={{ justifyContent: "center" }}>
                        <ListItemText
                          primary="First Name"
                          secondary={props.userdata.profile.firstName}
                          primaryTypographyProps={{ color: "gray" }}
                          secondaryTypographyProps={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: "bold"
                          }}
                        />
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItem sx={{ justifyContent: "center" }}>
                        <ListItemText
                          primary="Last Name"
                          secondary={props.userdata.profile.lastName || "N/A"}
                          primaryTypographyProps={{ color: "gray" }}
                          secondaryTypographyProps={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: "bold"
                          }}
                        />
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItem sx={{ justifyContent: "center" }}>
                        <ListItemText
                          primary="Job Title"
                          secondary={props.userdata.jobTitle || "N/A"}
                          primaryTypographyProps={{ color: "gray" }}
                          secondaryTypographyProps={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: "bold"
                          }}
                        />
                      </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItem sx={{ justifyContent: "center" }}>
                        <ListItemText
                          primary="Email"
                          secondary={props.userdata.profile.email}
                          primaryTypographyProps={{ color: "gray" }}
                          secondaryTypographyProps={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: "bold"
                          }}
                        />
                      </ListItem>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItem sx={{ justifyContent: "center" }}>
                        <ListItemText
                          primary="Bio"
                          secondary={props.userdata.Bio || "N/A"}
                          primaryTypographyProps={{ color: "gray" }}
                          secondaryTypographyProps={{
                            fontSize: 20,
                            color: "black",
                            fontWeight: "bold"
                          }}
                        />
                      </ListItem>
                    </Grid>
                  </Grid>
                </List>
              </Box>
            )}
          </animated.div>
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ backgroundColor: "white" }}>
          <img
            src={props.userdata.avatar}
            alt={props.userdata.profile.username}
            style={{ width: "20vw", height: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserPost;
