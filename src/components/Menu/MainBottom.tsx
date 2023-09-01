import React from "react";
import { Link } from "react-router-dom"; // Link 추가
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
          background: "#007AFF",
          borderRadius: "26px",
          boxShadow: "0px 5.88046px 8.23264px 0px rgba(0, 0, 0, 0.25)",

          display: "flex",
          padding: "0 35px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={`/tonHack/search`}>
          <img
            src={search}
            alt="search"
            style={{ width: "21px", height: "auto", cursor: "pointer" }}
          />
        </Link>
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
