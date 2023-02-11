import { Box, Button } from "@mui/material";
import  styled  from "@mui/material/styles/styled";
const menuList =[
  {title:"About",link:"#about"},
  {title:"Features",link:"#features"},
  {title:"Why Begin",link:"#whyBegin"},
  {title:"Cross-Store Shopping",link:"#cross-store"},
  {title:"Contact",link:"#home"},
]

const BlockImg = styled('img')({
    display:'block',
    maxWidth:'100%',
    objectFit:'cover',
    margin:'auto',
    objectPosition:'center',
    maxHeight:'100%',

})

const DarkButton= styled(Button)(({ theme }) => ({
    backgroundColor:theme.palette.secondary.contrastText,
    border:"none",
    outline:"none",
    color:"#fff",
    "&:hover":{
        border:"none",
        backgroundColor:theme.palette.secondary.main,
    }
  }));

const WhiteButton= styled(Button)(({ theme }) => ({
    backgroundColor:theme.palette.lightColor,
    border:"none",
    outline:"none",
    color:theme.palette.darkColor,
    paddingInline:"1rem",
    paddingBlock:"0.4rem",
    textTransform: "uppercase",
    "&:hover":{
        border:"none",
        backgroundColor:theme.palette.secondary.main,
    }
  }));


const StylishLine= styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor:"#515151",
    height:'2px',
    width:"100px",
    "&::after":{
        content: '""',
        display: 'block',
        position: 'absolute',
        top:0,
        height:'2px',
        width: '60%',
        backgroundColor:theme.palette.secondary.main,
    }
  }));


  const ThemeButton= styled(Button)(({ theme }) => ({
    backgroundColor:theme.palette.textColor,
    border:"none",
    outline:"none",
    color:theme.palette.themeBg,
    paddingInline:"1rem",
    paddingBlock:"0.5rem",
    "&:hover":{
        border:"none",
        backgroundColor:theme.palette.secondary.main,
    }
  }));


  const GreenLine= styled(Box)(({ theme }) => ({
    backgroundColor:theme.palette.secondary.main,
    height:'2px',
    width:"100px",
    marginInline:"auto",
    marginBlock:"1em"
  }));
export {BlockImg,DarkButton,StylishLine,ThemeButton,GreenLine,menuList,WhiteButton}