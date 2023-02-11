import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography} from "@mui/material";
import { GreenLine } from "../../utils/ui";
import logo1 from "../../assets/media/logo1.png";
import logo2 from "../../assets/media/logo2.png";
import logo3 from "../../assets/media/logo3.png";
import logo4 from "../../assets/media/logo4.png";
import logo5 from "../../assets/media/logo5.png";
import { Navigation } from "swiper";
import BrandSlide from "./BrandSlide";
import "swiper/css";
import "swiper/css/navigation";
import "./navigation.css";
const BrandSlider = () => {
  return (
    <Box id="cross-store" py={2}>
      <Typography
        sx={{ maxWidth: "50rem" }}
        mx="auto"
        my={4}
        pt={4}
        variant="h4"
        fontWeight="bold"
        align="center"
      >
        Cross store shopping in real time and cloth simulation on your own
        character!
      </Typography>
      <GreenLine />
    
      <Swiper
        loop
        rewind
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        spaceBetween={20}
        centeredSlides
        breakpoints={{
          540: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        style={{
          paddingInline: "2rem",
          "--swiper-navigation-color": "#08080C",
        }}
      >
        {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
          <SwiperSlide key={i}>
            <BrandSlide img={logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default BrandSlider;
