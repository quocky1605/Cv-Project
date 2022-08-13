import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardAbout = (props) => {
  const { title: title, content: content, children: children } = props;
  return (
    <Card sx={{ maxWidth: "100%", padding: "10px", borderRadius: "10px" }}>
      <CardActionArea>
        {children}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAbout;
