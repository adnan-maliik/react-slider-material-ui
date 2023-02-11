
import suite1 from "@/assets/media/3d-suite1.png"
import suite2 from "@/assets/media/3d-suite2.png"
import { BlockImg } from "@/utils/ui"
import { Box} from "@mui/material"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
const SimulationSlider = () => {
  return (
    <>
      
      <Box
      sx={{
        position:"absolute",
        right:"1rem",
        bottom:{xs:"0rem",sm:"-3rem",md:"-5rem"},
        maxWidth:"20rem",
        zIndex:2,
      }}
      > 
        <Swiper
        slidesPerView={1}
        rewind
        loop
        modules={[Navigation]}
        navigation={{
          prevEl:".prevBtn",
          nextEl:".nextBtn"
        }}
        >
          {[suite1,suite2].map((img,i)=>(
            <SwiperSlide key={i} >
              <BlockImg sx={{zIndex:-1}} src={img} alt="3d suite" />
            </SwiperSlide>
          ))}
        </Swiper>

      </Box>
    </>
  )
}

export default SimulationSlider