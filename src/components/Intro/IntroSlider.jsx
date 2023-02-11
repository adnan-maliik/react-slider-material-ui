import { Box, IconButton, styled, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import pic1 from "@/assets/media/slide-img1.png";
import pic2 from "@/assets/media/slide-img2.png";
import pic3 from "@/assets/media/slide-img3.png";
import { EffectFade, Navigation } from "swiper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack } from "@mui/system";
import { useState } from "react";
const HoverBox = styled(Box)({
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
  marginInline: "auto",
  height: "23rem",
  "& img": {
    display: "block",
    width: "100%",
    objectFit: "cover",
    transition: "0.4s ease-in-out",
    objectPosition: "center",
  },
  "& .content-box": {
    position: "absolute",
    bottom: 0,
    inset: "0",
    padding: ".5rem 4em",
    backgroundColor: "rgba(48, 45, 45, 0.6)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.6s ease-in-out",
    height: "40%",
    transform: "translateY(23rem)",
  },
  "&:hover img": {
    transform: "scale(1.2)",
  },
  "&:hover .content-box": {
    transform: "translateY(14rem)",
  },
});

const SliderButton = styled(IconButton)({
  backgroundColor: "#434343",
  borderRadius: "0px",
  color: "#D0CFCF",
  fontSize:"10px",
  "&.intro-next-btn": {
    backgroundColor: "#838383",
  },
  "&:hover": {
    color: "#1EE1B3",
    backgroundColor: "#112520",
  },
});
const IntroSlider = () => {
  const [incMargin,setIncMargin]=useState(0)
  return (
    <Box sx={{ position: "relative", maxWidth: "20rem", marginInline: "auto" }}>
      <Box 
      sx={{
        width:"5rem",
        height:"1.5rem",
        bgcolor:"secondary.main",
        marginLeft:`calc(3rem + ${incMargin}rem)`
      }}
      >
      </Box>
      <Stack
        direction="row"
        spacing={0}
        sx={{
          position: "absolute",
          right: 0,
          top: "1.5rem",
          zIndex: 5,
        }}
      >
        <SliderButton className="intro-prev-btn" fontSize="small">
          <KeyboardArrowLeftIcon />
        </SliderButton>
        <SliderButton className="intro-next-btn" fontSize="small">
          <ChevronRightIcon />
        </SliderButton>
      </Stack>
      <Swiper
        rewind
        slidesPerView={1}
        navigation={{
          prevEl: ".intro-prev-btn",
          nextEl: ".intro-next-btn",
        }}
        modules={[Navigation, EffectFade]}
        centeredSlides
        effect="fade"
        onSlideChange={({activeIndex})=>{
          setIncMargin(activeIndex*4)
        }}
      >
        {[pic1, pic2, pic3].map((pic, i) => (
          <SwiperSlide key={i}>
            <HoverBox>
              <img src={pic} alt="slider picture" />
              <Box className="content-box">
                <Typography fontWeight="bold" variant="h6" color="secondary">
                  Lorem Ipusm
                </Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod
                </Typography>
              </Box>
            </HoverBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default IntroSlider;
