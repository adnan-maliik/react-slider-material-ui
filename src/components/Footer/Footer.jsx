import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import arrowUpIcon from "@/assets/media/arrow-up.svg";
const Footer = () => {
  return (
    <Box pt={10}>
      <Box textAlign="center">
        <Link textTransform="uppercase" mb={4} sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}} align="center" href="#home" variant="h1" underline="none" color="#fff">
        <img src={arrowUpIcon} alt="arrow up" />
            begin
        </Link>
        <Stack justifyContent="center" direction="row" spacing={3}>
          {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
            <IconButton
              key={i}
              sx={{
                color: "#fff",
                background: "#383838",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                "&:hover":{
                    background:"#11745C"
                }
              }}
            >
              <Icon sx={{ fontSize: "2rem" }} />
            </IconButton>
          ))}
        </Stack>
      </Box>
      <Stack pt={3} direction="row" justifyContent={{xs:"center",sm:"space-between"}} alignItems="center">
        <Typography  variant="body2">&copy;&nbsp;All Rights Reserved</Typography>
        <Typography variant="body2" sx={{
          '@media (max-width: 599px)': {
            display: 'none',
          }
        }} >
          Terms and Conditions &nbsp;&nbsp;Privacy Policy
        </Typography>

      </Stack>
    </Box>
  );
};

export default Footer;
