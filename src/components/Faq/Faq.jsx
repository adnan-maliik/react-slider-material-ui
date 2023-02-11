import { Box, Typography } from "@mui/material";
import { GreenLine } from "../../utils/ui";
import Question from "./Question";

const Faq = () => {
  return (
    <Box id="specs">
      <Typography variant="h4" fontWeight="bold" align="center" >Standard Features</Typography>
      <GreenLine />
      <Box pt={3}>
        {[1, 2, 3, 4, 5].map((e) => (
          <Question key={e} />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
