import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HeightImg from "../../assets/media/Height.png";
import ClosetImg from "../../assets/media/Closet.png";
import ShirtImg from "../../assets/media/Shirt.png";
import { BlockImg } from "../../utils/ui";

let content =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi ";
const features = [
  {
    title: "Body measurement tracking",
    content,
    img: HeightImg,
  },
  {
    title: "In home trial of clothes and closet",
    content,
    img: ClosetImg,
  },
  {
    title: "Recommendation of clothes using AI",
    content,
    img: ShirtImg,
  },
];

const FeaturesList = () => {
  return (
    <List  sx={{ width: "100%", bgcolor: "background.paper" }}>
        {features.map(feature=>(
            <ListItem
            alignItems="center"
            key={feature.title}
            >
                <ListItemAvatar>
                <Avatar 
                
                sx={{width:"5rem",height:"5rem",p:2,backgroundColor:"themeGreenBg"}}

                  >
                    <BlockImg src={feature.img} />
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                sx={{ml:5}}
                primary={feature.title}
                secondary={feature.content}
                />
            </ListItem>

        ))}
    </List>
  );
};

export default FeaturesList;
