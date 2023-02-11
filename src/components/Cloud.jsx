import { Typography,Container, styled ,Box} from "@mui/material";
import cloudImg from "../assets/media/cloud.png"

const CloudWrapper = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${cloudImg})`,
    width: "100vw",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    [theme.breakpoints.up('lg')]:{

        height:"15rem",
    }
}));
const Cloud = () => {
  return (
    <CloudWrapper>
        <Container>
            <Box sx={{maxWidth:{xs:"90vw",sm:"60vw"}}} >
                <Typography sx={{typography:{xs:'h6',md:'h4'}}} py={3}>
                    Using <Box component="span" sx={{ color:"#91E227" }}>nvidia</Box> cloud to run and produce realistic results.
                </Typography>
            </Box>

        </Container>
    </CloudWrapper>
  );
};

export default Cloud;
