import { useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { menuList } from "../../utils/ui";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer } from "@mui/material";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{ color: "primary.contrastText" }}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx:{
            bgcolor:"primary.main",
            width:"90vw",
            maxWidth:"20rem"
          }
        }}
      >
        <Box sx={{py:2}} >

        {menuList.map((item, i) => (
          <MenuItem href={item.link} sx={{py:1.6}} key={i} onClick={handleClose}>
            {item.title}
          </MenuItem>
        ))}
        </Box>
      </Drawer>
    </>
  );
}
