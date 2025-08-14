import React, { useState } from "react"
import {
  Box,
  Typography,
  IconButton,
  Container,
  Slide,
  Chip,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import LaunchIcon from "@mui/icons-material/Launch"

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          background: "linear-gradient(135deg, #024950 0%, #0FA4AF 100%)",
          color: "white",
          py: { xs: 1.5, sm: 2 },
          px: { xs: 1, sm: 0 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1.5, sm: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: { xs: 1.5, sm: 2 },
                flex: 1,
                minWidth: 0,
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: { xs: 0.5, sm: 1 },
                    mb: { xs: 0.5, sm: 0.5 },
                  }}
                >
                  <Chip
                    label="NEW"
                    size="small"
                    sx={{
                      bgcolor: "#FFD700",
                      color: "#024950",
                      fontWeight: "bold",
                      fontSize: { xs: "0.6rem", sm: "0.75rem" },
                      height: { xs: 20, sm: 24 },
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    Portfolio 2.0 is Here!
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.95,
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                    lineHeight: 1.4,
                    pr: { xs: 0, sm: 2 },
                  }}
                >
                  Enhanced design, new projects, and improved performance.
                  <Box
                    component="span"
                    sx={{ display: { xs: "none", md: "inline" } }}
                  >
                    {" "}
                    Experience the upgraded portfolio with modern features and
                    sleek animations.
                  </Box>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, sm: 1 },
                width: { xs: "100%", sm: "auto" },
                justifyContent: { xs: "space-between", sm: "flex-end" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              <Box
                component="a"
                href="https://erwinmarkanora.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.75, sm: 1 },
                  borderRadius: 1,
                  bgcolor: "#003135",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "medium",
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                  transition: "all 0.3s ease",
                  flex: { xs: 1, sm: "none" },
                  justifyContent: "center",
                  minWidth: { xs: "auto", sm: "120px" },
                  "&:hover": {
                    bgcolor: "#0FA4AF",
                    transform: "translateY(-1px)",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{ display: { xs: "none", sm: "inline" } }}
                >
                  Visit New Site
                </Box>
                <Box
                  component="span"
                  sx={{ display: { xs: "inline", sm: "none" } }}
                >
                  Visit Site
                </Box>
                <LaunchIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />
              </Box>

              <IconButton
                onClick={handleDismiss}
                size="small"
                sx={{
                  color: "white",
                  opacity: 0.8,
                  p: { xs: 0.5, sm: 1 },
                  "&:hover": {
                    opacity: 1,
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Dismiss announcement"
              >
                <CloseIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
              </IconButton>
            </Box>
          </Box>
        </Container>

        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.7; }
            }
          `}
        </style>
      </Box>
    </Slide>
  )
}

export default AnnouncementBanner
