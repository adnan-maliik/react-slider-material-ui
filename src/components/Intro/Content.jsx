import { Typography ,Box} from "@mui/material"
import { StylishLine, ThemeButton } from "../../utils/ui"

const Content = () => {
  return (
    <Box>
            <Typography variant="h5" fontWeight="bold" mb={1}>Introduing</Typography>
            <StylishLine/>
            <Typography my={5} variant="body2">
              The newly designed BEGIN will completely alter the reality of
              fashion, individually and commercially as we know it. A major
              attribute of this mirror is to provide the user with the resources
              of complex fashion and style that many find difficult to obtain.
              Its main focus will be the user’s stylistic preferences and will
              then provide the user with an outfit which meets their own style
              while simultaneously using expert knowledge to ensure an outfit of
              pride.
              <br />
              <br />
              Because self-presentation is such a prominent element of
              judgement, all kinds of people are vehemently dressing in all
              kinds of ways to fit certain descriptions, norms, and anything
              that will allow their confidence to break through the cracks of
              self-doubt.
            </Typography>
            <ThemeButton>Learn More</ThemeButton>
          </Box>
  )
}

export default Content