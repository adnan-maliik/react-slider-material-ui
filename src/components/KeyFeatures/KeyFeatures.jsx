import { Box, Typography } from "@mui/material"
import FlexStack from "../Ui/FlexStack"
import mobileImg from "../../assets/media/mobile.png"
import { BlockImg, StylishLine } from "../../utils/ui"
import FeaturesList from "./FeaturesList"

const KeyFeatures = () => {
  return (
    <Box id="features" >
        <FlexStack>
                <Box>
                    <BlockImg src={mobileImg}  alt="mobile design" />
                </Box>
                <Box>
                       <Typography fontWeight="bold" variant="h5" mb={3}  textTransform="uppercase" >
                            Everything you need!
                        </Typography> 
                        <StylishLine
                        sx={{width:"245px"}}
                         />
                        <FeaturesList/>
                </Box>
        </FlexStack>
    </Box>
  )
}

export default KeyFeatures