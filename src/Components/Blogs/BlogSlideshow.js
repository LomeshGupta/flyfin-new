import React from "react";
import { Paper, Typography, Button, Grid } from "@mui/material";

const BlogPost = ({ title, content, imageUrl }) => (
  <Paper className="container" elevation={3}>
    <img
      src={imageUrl}
      className="blogimg"
      alt="Blog"
      style={{ width: "90%", height: "300px", marginBottom: "10px" }}
    />
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" marginBottom="20px" gutterBottom>
      {content}
    </Typography>
    <Button variant="contained" color="primary">
      Read More
    </Button>
  </Paper>
);

export default BlogPost;
