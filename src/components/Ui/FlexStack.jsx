import { Container,Stack } from "@mui/material"

const FlexStack = ({children}) => {
  return (
    <Container sx={{ pt: 5 }}>
         <Stack
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{ "&>*": { flex: 1 } }}
        >
            {children}
        </Stack>
    </Container>
  )
}

export default FlexStack