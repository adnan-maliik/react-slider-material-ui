import { Box, Typography, Grid,Stack, IconButton} from "@mui/material";
import { StylishLine, WhiteButton } from "../../utils/ui";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SimulationSlider from "./SimulationSlider";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowLeft';
const Simulation = () => {
  return (
    <Box bgcolor="themeBg" sx={{ py: 10 ,  position:"relative"}}>
      <Stack spacing={1}
          sx={{
            position:"absolute",
            right:"3rem",
            top:"3rem",
            zIndex:5
          }}
           >
          <IconButton className="prevBtn" >
            <KeyboardArrowUpIcon color="secondary"/>
          </IconButton>
          <IconButton className="nextBtn" >
            <KeyboardArrowDownIcon color="secondary"/>
          </IconButton>
      </Stack>
      <Box
        sx={{
          bgcolor: "darkColor",
          color: "#fff",
          py: 6,
          px: 2,
          textAlign: "left",
          maxWidth:{xs:"95vw",sm:"65rem"},
          mx:"auto",
        
        }}
      >
          
        <Grid container sx={{position:"relative",zIndex:1}} >
            <Grid item sm={7} sx={{position:"relative",zIndex:3}}>
            <Typography variant="h4" mb={2}  fontWeight="bold">
                3D clothing simulation on user-designed metahuman
            </Typography>
            <StylishLine sx={{ width: "245px" }} />
            <Typography variant="body2" py={3}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                velit esse molestie
            </Typography>
               <WhiteButton sx={{"&:hover":{backgroundColor:"#08080C !important",color:"#fff"},py:1.5}} >
                Discover more &nbsp;&nbsp;
                <ArrowForwardIosIcon color="secondary" />
               </WhiteButton>
            </Grid>
            <SimulationSlider/>
        </Grid>
      </Box>
    </Box>
  );
};

export default Simulation;
