import { Box, Stack, Typography } from "@mui/material"
import { BlockImg, WhiteButton } from "../../utils/ui"
import MobileImg from "../../assets/media/girl-touch-mobile.png"
import flowerImg from "../../assets/media/flower.png"

const MobileShowCase = () => {
  return (
        <Stack direction="row" justifyContent="space-between" sx={{"&>*":{flex:1}}} >
            <Box>
                <BlockImg src={MobileImg} alt="mobile show case" />
            </Box>
            <Stack justifyContent="space-between"  >
                <Box>
                        <Typography variant="body2" pt={5} >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                        <Box sx={{display:{"xs":"none",md:"inline"}}} component="span" >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpuLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo con
                        </Box>
                        </Typography>
                        <Box textAlign="center" mt={2} >
                                <WhiteButton >
                                    Learn more
                                </WhiteButton>
                        </Box>
                </Box>
                <Box sx={{alignSelf:"flex-end"}} >
                    <BlockImg  width={200} src={flowerImg} alt='flower' />
                </Box>

            </Stack>
        </Stack>
  )
}

export default MobileShowCase