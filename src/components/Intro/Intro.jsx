import { Box, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Brands from "./Brands";
import Content from "./Content";
import IntroSlider from "./IntroSlider";

const Intro = () => {
  return (
    <Box id="about" sx={{ bgcolor: "themeBg" }}>
      <Typography
        fontWeight="800"
        sx={{
          color: "cutTextColor",
          fontSize: "10rem",
          transform: "translateY(-6rem)",
          position: "absolute",
          zIndex:0
        }}
        ml="5rem"
        variant="h1"
        textTransform="uppercase"
      >
        begin
      </Typography>
      <Container sx={{ pb: 10, pt: 15 }}>
        <Brands />
        <Grid
          container
          alignItems={{ xs: "center", md: "end" }}
          spacing={4}
          justifyContent="center"
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{ py: 10 }}
        >
          <Grid item md={5}>
            <Content />
          </Grid>
          <Grid item md={7}>
            <IntroSlider />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
