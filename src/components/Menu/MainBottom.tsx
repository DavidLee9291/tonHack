import React from "react";
import search from "../../assets/search.svg";
import home from "../../assets/home.svg";
import gear from "../../assets/gear.svg";
import { Grid } from "@mui/material";

const MainBottom: React.FC = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{ width: "100%", justifyContent: "center", marginTop: "14px" }}
    >
      <div
        style={{
          flex: "0 0 auto",
          width: "203px",
          height: "52px",
          background: "#D9D9D9",
          borderRadius: "26px",
          boxShadow: "0px 5.88046px 8.23264px 0px rgba(0, 0, 0, 0.25)",

          display: "flex",
          padding: "0 35px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={search}
          alt="search"
          style={{ width: "21px", height: "auto" }}
        />
        <img src={home} alt="home" style={{ width: "21px", height: "auto" }} />
        <img
          src={gear}
          alt="setting"
          style={{ width: "21px", height: "auto" }}
        />
      </div>
    </Grid>
  );
};

export default MainBottom;
