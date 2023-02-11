import { Card, CardContent, Stack, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const TestimonialCard = () => {
  return (
    <Card sx={{bgcolor:"#08080C",color:"#fff",py:2}}>
      <CardContent>
        <Stack direction="row" spacing={3} alignItems="center" >
        <Typography variant="h5"  >
          Lorem Ipsum
        </Typography>
        <ArrowForwardIosIcon color="secondary" />
        </Stack>
        <Typography my={4} variant="body2" >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard