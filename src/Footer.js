// Footer.js
import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

/**
 * A simple Material-UI (MUI) Footer component.
 * It displays various sections like Products, Company, Resources, and Legal,
 * along with a copyright notice, mimicking a common website footer layout.
 *
 * @returns {JSX.Element} The Footer component.
 */
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper", // Uses MUI theme's background color
        py: 6, // Padding top and bottom
        px: 2, // Padding left and right
        mt: "auto", // Pushes footer to the bottom of the page
        borderTop: "1px solid",
        borderColor: "divider", // Uses MUI theme's divider color
        // Responsive styling for layout
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "url(/footer-bg.png)",
        backgroundSize : "cover",
        backgroundRepeat : "no-repeat"
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on extra small screens
              sm: "repeat(2, 1fr)", // 2 columns on small screens
              md: "repeat(4, 1fr)", // 4 columns on medium and larger screens
            },
            gap: {
              xs: "15", // Center items on small screens
              md: "30",
              lg: "60" // Align to start on medium+ screens
            }, // Gap between grid items
            mb: 6, // Margin bottom for the content sections
            width: "100%",
            justifyItems: {
              xs: "center", // Center items on small screens
              md: "center", // Align to start on medium+ screens
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          {/* Products Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Products
            </Typography>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Overview
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Features
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Releases
            </Link>
          </Box>

          {/* Company Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Company
            </Typography>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              About Us
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Press
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              News
            </Link>
          </Box>

          {/* Resources Section */}
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Newsletter
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Help Centre
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Tutorials
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Support
            </Link>
          </Box>

          {/* Legal Section */}
          <Box>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ textDecoration: "none" }}
            >
              Legal
            </Typography>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Terms
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ mb: 1, textDecoration: "none" }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              variant="subtitle1"
              color="text.secondary"
              display="block"
              sx={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h4"
            color="text.disabled" // A lighter color for the "Morphion.Art" text
            sx={{
              mt: 2,
              fontWeight: "bold",
              opacity: 0.2, // Make it very subtle
              pointerEvents: "none", // Ensure it's not interactive
              userSelect: "none", // Prevent text selection
              borderTop: "1px solid",
              fontSize: { xs: "3rem", sm: "5rem", md: "7rem", lg: "11rem" },
            }}
          >
            Morphion.Art
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              pt: 2, // Padding top
              borderColor: "divider",
              width: "100%",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "start",
              },
            }}
          >
            © 2025 SlideMind Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
