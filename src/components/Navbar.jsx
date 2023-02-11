import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ThemeToggler from "./Ui/ThemeToggler";
import MenuLink from "./Ui/MenuLink";
import { menuList } from "../utils/ui";
import MobileMenu from "./Ui/MobileMenu";

export default function Navbar() {
  return (
    <Box id="home" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <MobileMenu />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuList.map((elm) => (
              <MenuLink link={elm.link} key={elm.title}>
                {elm.title}
              </MenuLink>
            ))}
          </Box>
          <Box marginLeft="auto" display="flex" alignItems="center">
            <Box
              sx={{
                "@media (max-width: 540px)":{
                  position:"absolute",
                  top:"10rem",
                  right:"2rem",
                  zIndex:3,
                  transform: "rotate(90deg)",
                }
              }}
            >
              <ThemeToggler />
            </Box>
            <Button
              disableElevation
              sx={{
                color: "textColor",
                "&:hover": { color: "#1ee1b3" },
                marginX: "0.5rem",
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{ "&:hover": { color: "#fff", bgcolor: "#1EB2E1" } }}
              color="secondary"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
