import React, { ReactElement } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface Props {
  image: string;
  header: string;
  body: string;
}

function ActionAreaCard({ image, header, body }: Props) {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="recipe image"
        />
        <CardContent sx={{ backgroundColor: "coral" }}>
          <Typography gutterBottom variant="h5" component="div">
            {header}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const StyledMUICard = styled(ActionAreaCard)`
  width: 200px;
  height: 300px;
`;

export default StyledMUICard;
