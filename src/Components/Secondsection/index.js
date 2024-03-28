import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import "./boxsec.css";

const BoxSection = () => {
  return (
    <Grid container spacing={3}>
      {/* Box 1 */}
      <Grid item xs={12} sm={4} position="relative">
        <Box
          icon={<BuildIcon fontSize="large" />}
          title="How We Do"
          subtitle="A team imbibed on professional pillars of trust, integrity, client focus and social value."
          backgr="#004aad"
        />
      </Grid>

      {/* Box 2 */}
      <Grid item xs={12} sm={4} position="relative">
        <Box
          icon={<BusinessIcon fontSize="large" />}
          title="What We Do"
          subtitle="Lead by experts having vast experience and specialisation in their core fields"
          backgr="#47728f"
        />
      </Grid>

      {/* Box 3 */}
      <Grid item xs={12} sm={4} position="relative">
        <Box
          icon={<SecurityIcon fontSize="large" />}
          title="Data Security"
          subtitle="A disciplined and time-bound approach delivering ‘excellence’ all the times."
          backgr="#004aad"
        />
      </Grid>
    </Grid>
  );
};

const Box = ({ icon, title, subtitle, backgr }) => {
  return (
    <div
      className="box"
      style={{
        textAlign: "center",
        background: backgr,
        padding: "10%",
        borderRadius: "5%",
        margin: "20px",
        color: "white",
      }}
    >
      <div className="icon" style={{ marginBottom: "40px" }}>
        {icon}
      </div>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
      <Button variant="contained" color="primary" style={{ marginTop: "1rem" }}>
        Learn More
      </Button>
    </div>
  );
};

export default BoxSection;
