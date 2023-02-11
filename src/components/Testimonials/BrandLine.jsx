import { Box, Container, IconButton, Typography } from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { GreenLine } from "../../utils/ui";
const BrandLine = () => {
  return (
    <Box
      sx={{
        bgcolor: "themeDarkBrownBg",
        color: "white",
        transform: "0px -40px",
      }}
    >
      <Container sx={{ py: 5 }}>
        <Box textAlign="center" mx="auto" my={5} sx={{ maxWidth: "50rem" }}>
          <Typography my={4} align="center" variant="h5">
            Enhance your shopping experience with elevated expertise and
            efficient time constraints.
          </Typography>
          <GreenLine />
          <IconButton>
            <SlideshowIcon
              sx={{
                color: "#fff",
                fontSize: "4rem",
                "&:hover": { color: "secondary.main" },
              }}
              color="white"
            />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandLine;
