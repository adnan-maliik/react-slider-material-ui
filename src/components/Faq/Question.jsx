import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Divider, Stack } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
const Question = () => {
  return (
    <Accordion
      sx={{
        border: "1px solid #565660",
        borderRight: "0px",
        borderLeft: "0px",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" fontSize="large" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#565660" }}>
          HARDWARE
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="top"
          flex={1}
          px={3}
        >
          <MemoryIcon sx={{fontSize:'4rem',color:"#565660"}} />
          <Box>
            <Typography variant="body2" py={2}>
              Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            </Typography>
            <Divider />
            <Typography variant="body2" py={2}>
              Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ame
            </Typography>
          </Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
