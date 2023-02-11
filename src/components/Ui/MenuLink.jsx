import React from "react";
import Typography from "@mui/material/Typography";


const MenuLink = ({link,children}) => {
  return (
    <Typography
      sx={{
        mx: "2rem",
        textDecoration: "none",
        color: "textColor",
        "&:hover": { color: "#1ee1b3" },
      }}
      variant="body2"
      component="a"
      href={link}
    >
      {children}
    </Typography>
  );
};

export default MenuLink;
