import { Card } from "@mui/material";
import { BlockImg } from "../../utils/ui";

const BrandSlide = ({img}) => {
  return (
    <Card
      sx={{ bgcolor: "#F6F6F6",mx:"auto", border: "2px solid #545454", py: 3,height:"9rem",maxWidth:"15rem" }}
    >
      <BlockImg src={img} alt="slider logo" />
    </Card>
  );
};

export default BrandSlide;
