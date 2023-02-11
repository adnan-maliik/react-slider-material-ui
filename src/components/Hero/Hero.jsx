import {
  Typography,
  styled,
  Stack,
  TextField,
  Container,
  IconButton,
  Box,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import lgBg from "../../assets/media/bg-lg.png";
import mdBg from "../../assets/media/bg-md.png";
import smBg from "../../assets/media/bg-sm.png";
import {  DarkButton, GreenLine } from "../../utils/ui";
const BgWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${lgBg})`,
  height: "100vh !important",
  width: "100vw",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "realtive",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mdBg})`,
  },
  [theme.breakpoints.down("sm")]: {
    backgroundImage: `url(${smBg})`,
  },
}));


const CustomTextField=styled(TextField)({
  color:"white",
  Input:{
    '&::placholder':{
      color:"white"
    }
  }
})

const Hero = () => {
  return (
    <BgWrapper sx={{position:"relative",zIndex:2}} >
      <Container>
        <Stack
          direction="column"
          spacing={0}
          sx={{
            textTransform: "uppercase",
            maxWidth: { xs: "90vw", sm: "50vw", md: "40vw" },
            ml: "auto",
            pr:"1rem"
          }}
          textAlign="right"
        >
          <Typography variant="body2" color="secondary">
            tagline
          </Typography>
      
          <Typography
            sx={{ fontSize: { sm: "101px", md: "150px" } }}
            my={0}
            variant="h1"
            color="white"
            fontWeight={600}
          >
            begin
          </Typography>
          <GreenLine sx={{mx:0,ml:"auto",mb:2}} />
          <Typography
            variant="body1"
            sx={{
              textTransform: "lowercase",
              fontWeight: "400",
              fontSize: "12px",
              color: "#fff",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            ibh euismod tincidunt ut laoreet dolore magna aliquam erat er
            adipiscing elit, sed diam nonummy nibh euismod tincidunt
          </Typography>
          <Stack
            mt={4}
            direction="row"
            justifyContent="space-between"
            spacing={3}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <CustomTextField
              variant="outlined"
              placeholder="ENTER YOUR EMAIL"
              sx={{
                flexGrow: 1,
                Input:{
                  color:"white",
                  textAlign:"center"
                }
                
              }}
            />
            <DarkButton variant="outlined">get started</DarkButton>
          </Stack>
        </Stack>
      </Container>
      <Stack
        sx={{ position: "absolute", bottom: "1rem", left: "2rem" }}
        spacing={2}
        direction="row"
        mt="auto"
      >
        {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
          <IconButton key={i} sx={{ color: "#fff" }}>
            <Icon />
          </IconButton>
        ))}
      </Stack>
    </BgWrapper>
  );
};

export default Hero;
