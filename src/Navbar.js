import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ["Products", "Solutions", "About", "Pricing"];

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          px: { xs: 2, sm: 6 },
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* LEFT: Logo */}
          <Box>
            <a href="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  px: 2,
                  cursor: "pointer",
                }}
              >
                Morphion.Art
              </Typography>
            </a>
          </Box>

          {/* CENTER: Nav Links (Desktop Only) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            {navItems.map((text) => (
              <a
                key={text}
                href="https"
                style={{ textDecoration: "none" }}
                onClick={(e) => e.preventDefault()}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#000",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {text}
                </Typography>
              </a>
            ))}
          </Box>

          {/* RIGHT: Buttons or Menu Icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                variant="text"
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: 999,
                  background: "white",
                  paddingX: "20px"
                }}
              >
                Log in
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)',
                  color: "#fff",
                  borderRadius: 999,
                  px: 3,
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    background: 'linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)',
                  },
                  boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;"
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          {navItems.map((item) => (
            <List key={item}>
              <ListItem button onClick={toggleDrawer}>
                <ListItemText primary={item} />
              </ListItem>
            </List>
          ))}
          <Box mt={2} textAlign="center">
            <Button variant="outlined" fullWidth sx={{ mb: 1 }}>
              Log in
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "linear-gradient(to right, #7f00ff, #e100ff)",
                color: "#fff",
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
