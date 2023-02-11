import { Stack, Typography, Box, Divider } from "@mui/material";
import { BlockImg } from "../../utils/ui";
import dressImg from "../../assets/media/grey-dress.png";
const SuitShowCase = () => {
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
        sx={{ "&>*": { flex: 1 } }}
        mb={0}
      >
        <Box>
          <BlockImg src={dressImg} alt="grey-dress" />
        </Box>
        <Typography variant="body2">
          In collaboration with ZOZOSUIT, our mirror will also provide a highly
          accurate replica of the user’s body via scanning and image processing.
          Through this, we will also be able to provide motion tracking for the
          user-customized metahuman in real time, making the experience
          incredibly realistic provided the mirror will be touch screen and
          interactive.
        </Typography>
      </Stack>
      <Divider
        sx={{
          "&::before, &::after": {
            borderColor: "white",
          },
        }}
        light={true}
        textAlign="right"
      >
        <Typography>ZOZOSUIT</Typography>
      </Divider>
    </>
  );
};

export default SuitShowCase;
