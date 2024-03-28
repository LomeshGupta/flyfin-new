import React from "react";
import { Grid, Typography } from "@mui/material";
import "./sofware.css";

const SoftwareExpertiseSection = () => {
  const softwareList = [
    "XERO",
    "QuickBooks",
    "Sage",
    "Wolters Cluwers",
    "Dext",
    "Relate Software",
    "Surf Account Production",
    "ZOHO",
    "Payroll Manager By Bright",
  ];

  return (
    <div style={{ padding: "40px" }} className="soft">
      <Typography variant="h4" gutterBottom>
        Software Expertise
      </Typography>
      <Grid container spacing={2} className="grid">
        {softwareList.map((software, index) => (
          <Grid className="ballcont" item key={index}>
            <div className="ball">
              <span className="text">{software}</span>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SoftwareExpertiseSection;
