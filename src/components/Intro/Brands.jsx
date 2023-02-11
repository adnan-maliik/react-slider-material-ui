import { Stack } from "@mui/system"
import { BlockImg } from "../../utils/ui"
import brand1 from "../../assets/media/brand1.png"
import brand2 from "../../assets/media/brand2.png"
import brand3 from "../../assets/media/brand3.png"
import brand4 from "../../assets/media/brand4.png"
const Brands = () => {
  return (
    <Stack  direction="row" alignItems="center" justifyContent="space-between">
        {[brand1,brand2,brand3,brand4].map((brandImg,i)=>(
            <BlockImg 
            sx={{maxWidth:{xs:"80px",sm:"100%"}}}
             key={i} src={brandImg} alt='Brand Logo' loading="lazy" />
        ))}
    </Stack>
  )
}

export default Brands