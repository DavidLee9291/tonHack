import React from "react";
import chart from "../../assets/chart.svg";
import { Grid } from "@mui/material";

export default function NFTDetailChart() {
  return (
    <Grid container item xs={12} sx={{ padding: "20px" }}>
      <Grid
        container
        item
        xs={4}
        sx={{
          flexDirection: "column",
          gap: "10px",
          textAlign: "left",
          padding: "5% 0",
        }}
      >
        <Grid container item sx={{ flexDirection: "column" }}>
          <p
            style={{
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            최저가
          </p>
          <p
            style={{
              color: "#151F40",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            30 TON
          </p>
        </Grid>
        <Grid container item xs sx={{ flexDirection: "column" }}>
          <p
            style={{
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            월 평균 가격
          </p>
          <p
            style={{
              color: "#151F40",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            30 TON
          </p>
        </Grid>
        <Grid container item xs sx={{ flexDirection: "column" }}>
          <p
            style={{
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            현재 판매 가격
          </p>
          <p
            style={{
              color: "#151F40",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            30 TON
          </p>
        </Grid>
      </Grid>
      <Grid container item xs>
        <img
          src={chart}
          alt="chart"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid container item xs={12}>
        <Grid container item xs={4} />
        <Grid
          container
          item
          xs
          sx={{
            gap: "10px",
            textAlign: "left",
            padding: "0 10px",
            justifyContent: "space-around",
          }}
        >
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "11.713px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            8/1
          </p>
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "11.713px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            8/8
          </p>
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "11.713px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            8/16
          </p>
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "11.713px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            8/24
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
}
