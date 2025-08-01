import Navbar from "./Navbar";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function App() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newPreviews = selectedFiles.map((file) => {
      return {
        name: file.name,
        url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        isImage: file.type.startsWith("image/"),
      };
    });

    setFiles((prev) => [...prev, ...selectedFiles]); // ✅ APPEND FILES
    setPreviews((prev) => [...prev, ...newPreviews]); // ✅ APPEND PREVIEWS
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #fdfbfb 0%, #fbe4ff 40%, #e0d4fc 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: 4 }}
        >
          Create Stunning Decks in
          <br />
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(to right,rgb(255, 147, 224),rgb(49, 61, 154))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Few Seconds
          </Box>
        </Typography>

        {/* Card */}
        <Card
          sx={{
            borderRadius: 4,
            maxWidth: 650,
            width: "100%",
            boxShadow: "0 20px 20px rgba(64, 22, 68, 0.6)",
            p: 1,
          }}
        >
          <CardContent>
            <Stack spacing={4}>
              {/* Input Field */}
              <TextField
                placeholder="Just type your idea or topic below"
                variant="standard"
                multiline
                minRows={3}
                maxRows={3}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    overflowY: "auto",
                  },
                }}
                sx={{
                  backgroundColor: "transparent",
                  px: 1,
                  py: 1.5,
                }}
              />

              {/* Upload Row */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                {/* Upload Button */}
                <Box>
                  <input
                    accept="image/*,application/pdf"
                    id="file-upload"
                    type="file"
                    multiple
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                    }}
                  >
                    <AttachFileIcon fontSize="small" />
                    <Typography variant="caption" color="text.secondary">
                      Add Attachment
                    </Typography>
                  </label>
                </Box>

                {/* Generate Button */}
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #7f00ff, #e100ff)",
                    color: "#fff",
                    px: 4,
                    borderRadius: "999px",
                    textTransform: "none",
                    boxShadow: "0 4px 10px rgba(127, 0, 255, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(to right, #6a00e0, #c800e8)",
                    },
                  }}
                >
                  Generate
                </Button>
              </Box>

              {/* File Preview Section */}
              {previews.length > 0 && (
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    gap: 2,
                    py: 1,
                    px: 1,
                    whiteSpace: "nowrap",
                    scrollbarWidth: "thin", // for Firefox
                    "&::-webkit-scrollbar": {
                      height: "6px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#ccc",
                      borderRadius: "4px",
                    },
                  }}
                >
                  {previews.map((file, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      {/* Remove Button */}
                      <Box
                        onClick={() => {
                          // Remove file and preview at index
                          const newFiles = [...files];
                          const newPreviews = [...previews];
                          newFiles.splice(index, 1);
                          newPreviews.splice(index, 1);
                          setFiles(newFiles);
                          setPreviews(newPreviews);
                        }}
                        sx={{
                          position: "absolute",
                          top: -8,
                          right: -8,
                          background: "#fff",
                          borderRadius: "50%",
                          width: 20,
                          height: 20,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: 14,
                          boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                          zIndex: 1,
                        }}
                      >
                        ✕
                      </Box>

                      {file.isImage ? (
                        <Box
                          component="img"
                          src={file.url}
                          alt={`preview-${index}`}
                          sx={{
                            width: 120,
                            height: 90,
                            borderRadius: 2,
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: 120,
                            height: 90,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2,
                            backgroundColor: "#f1f1f1",
                            fontSize: "0.75rem",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                            flexShrink: 0,
                            px: 1,
                          }}
                        >
                          {file.name}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <FeaturesSection />
      <Footer/>
    </>
  );
}

export default App;
