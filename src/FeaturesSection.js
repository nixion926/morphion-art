import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Rating,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  {
    title: "Start with AI — Instantly",
    items: [
      "Generate slides from a topic, outline, or URL",
      "AI selects the ideal layout and visuals",
      "Choose from 100+ ready-made themes",
    ],
    button: "Start For Free",
    image: "/container.png",
  },
  {
    title: "Edit Smarter in One Click",
    items: [
      "Instantly improve clarity, tone, and flow",
      "Rewrite text and generate visuals with AI",
      "Collaborate live with your team",
    ],
    button: "Start For Free",
    image: "/container2.png",
  },
  {
    title: "Export & Share Anywhere",
    items: [
      "Export as PDF, PPTX, PNG, or publish online",
      "Responsive for all major devices",
      "Track viewer engagement in real-time",
    ],
    button: "Start For Free",
    image: "/container3.png",
  },
];

const testimonials = [
  {
    name: "Dianne M. Mason",
    content:
      "I created an entire client pitch in under 10 minutes. The AI nailed both the content and the design — it's seriously impressive",
    avatar: "/user1.jpg",
    rating: 5,
  },
  {
    name: "Dianne M. Mason",
    content:
      "I created an entire client pitch in under 10 minutes. The AI nailed both the content and the design — it's seriously impressive",
    avatar: "/user1.jpg",
    rating: 5,
  },
  {
    name: "Dianne M. Mason",
    content:
      "I created an entire client pitch in under 10 minutes. The AI nailed both the content and the design — it's seriously impressive",
    avatar: "/user1.jpg",
    rating: 5,
  },
];

function FeaturesSection() {
  return (
    <Box
      id="features"
      sx={{ py: 10, px: { xs: 2, sm: 4, md: 10 }, textAlign: "center" }}
    >
      {/* Header */}
      <Typography
        variant="caption"
        sx={{ fontWeight: "bold", color: "text.secondary" }}
      >
        🔐 Powerful Features
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1, mb: 2 }}>
        AI That Works{" "}
        <Box
          component="span"
          sx={{
            background: "linear-gradient(to right, #a18cd1, #fbc2eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Like Magic
        </Box>
      </Typography>
      <Typography
        variant="body2"
        sx={{ maxWidth: 600, mx: "auto", mb: 6, color: "text.secondary" }}
      >
        From idea to delivery — AI handles the heavy lifting so you can focus on
        your message.
      </Typography>

      {/* Feature Cards */}
      {features.map((feature, index) => (
        <Grid
          key={feature.title}
          container
          spacing={9}
          alignItems="center"
          justifyContent="center"
          sx={{
            mb: 10,
            flexDirection: {
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            },
          }}
        >
          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box sx={{ textAlign: "left", width: "100%", maxWidth: 500 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>
                {feature.title}
              </Typography>
              <List dense>
                {feature.items.map((text, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  background:
                    "linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)",
                  color: "#fff",
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: "bold",
                  px: 4,
                  boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;",
                }}
              >
                {feature.button}
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={feature.image}
              alt={feature.title}
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4,
               
                
              }}
            />
          </Grid>
        </Grid>
      ))}

      {/* Testimonials */}
      <Box id="testimonials" sx={{ mt: 12 }}>
        <Typography
          variant="caption"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          💬 Wall of Love
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          Hear What Our{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline",
              boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;",
            }}
          >
            Users Says
          </Box>
        </Typography>
        <Typography
          variant="body2"
          sx={{ maxWidth: 600, mx: "auto", mb: 4, color: "text.secondary" }}
        >
          From startups to educators, our AI presentation tool is transforming
          the way people create and deliver ideas.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            py: 2,
            px: 1,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {testimonials.map((review, idx) => (
            <Box
              key={idx}
              sx={{
                minWidth: 300,
                maxWidth: 320,
                px: 3,
                py: 5,
                borderRadius: 5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                scrollSnapAlign: "start",
                transform: `rotate(${idx % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Avatar
                  src={review.avatar}
                  sx={{ width: 32, height: 32, mr: 1 }}
                />
                <Typography variant="body2" fontWeight="bold">
                  {review.name}
                </Typography>
              </Box>
              <Rating value={review.rating} readOnly size="small" />
              <Typography variant="body2" mt={1}>
                {review.content}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            background:
              "linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)",
            color: "#fff",
            borderRadius: 999,
            px: 4,
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;",
          }}
        >
          See More Reviews
        </Button>
      </Box>
      <Box
        id="services-explore"
        sx={{
          mt: 12,
          background: "#F5F7F9",
          borderRadius: "16px",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            pointerEvents: "none",
            zIndex: "2",
          },
        }}
      >
        <Box sx={{ py: 8, textAlign: "center" }}>
          {/* Heading */}
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(to right, #a18cd1, #fbc2eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;",
              }}
            >
              Present Smarter?
            </Box>
          </Typography>

          {/* Justified Description */}
          <Typography
            variant="body2"
            sx={{
              maxWidth: 600,
              mx: "auto",
              mb: 3,
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Join thosands who are turning ideas into stunning presentations{" "}
            <br />
            effortlessly and Instantly with AI.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            sx={{
              mt: 2,
              background:
                "linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)",
              color: "#fff",
              borderRadius: 999,
              textTransform: "none",
              fontWeight: "bold",
              px: 4,
              boxShadow: "1px 6px 8px 0px #FFFFFF52 inset;",

              "&:hover": {
                background:
                  "linear-gradient(90deg, #FFBCFA 0%, #5C83F4 50%, #724AFE 100%)",
                opacity: 0.9,
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturesSection;
