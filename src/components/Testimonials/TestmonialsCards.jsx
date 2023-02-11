import { Box, Typography ,Container, Stack} from "@mui/material";
import { GreenLine, ThemeButton } from "../../utils/ui";
import TestimonialCard from "./TestimonialCard";



const TestmonialsCards = () => {
  return (
    <Box
      sx={{
        bgcolor: "themeBrownBg",
      }}
    >
      <Container sx={{ py: 7 }}>
        <Typography variant="h5" align="center">
          How it is useful for user and companies
        </Typography>
        <GreenLine />
        <Stack sx={{pt:5}} spacing={4} direction={{xs:"column",sm:"row"}} justifyContent="center" alignItems="center" >
            {[1,2,3].map(i=>(
                <TestimonialCard
                key={i}
                />
            ))}
        </Stack>
        <Box textAlign="center" my={4}>
                <ThemeButton py={4} >
                    Learn More
                </ThemeButton>
        </Box>
      </Container>
    </Box>
  );
};

export default TestmonialsCards;
