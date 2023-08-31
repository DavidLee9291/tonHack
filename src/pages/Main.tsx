import { Grid } from "@mui/material";
import "/src/App.css";
import "/src/index.css";
import bell from "../assets/bell.svg";
import stage from "../assets/stage.svg";
import circledplus from "../assets/circledplus.svg";
import MainCarousel from "../components/Carousel/MainCarousel";
import MainBottom from "../components/Menu/MainBottom";

export default function Main(): JSX.Element {
  return (
    <Grid container item sx={{ backgroud: "#F5F5F5" }}>
      <Grid container item sx={{ justifyContent: "space-between" }}>
        <p
          style={{
            borderRadius: "19px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            color: "#EE85A8",
            textAlign: "center",
            padding: "12px 25px",
            fontFamily: "Inter",
            fontSize: "19.657px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            margin: "0",
          }}
        >
          Hi, Susan
        </p>
        <img src={bell} alt="bell" style={{ width: "18px", height: "20px" }} />
      </Grid>
      <Grid container item sx={{ textAlign: "left", marginTop: "18px" }}>
        <p
          style={{
            borderRadius: "19px",
            textAlign: "left",
            color: "#151F40",

            fontFamily: "Inter",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            margin: "0",
          }}
        >
          Create your own idol group <br />
          <span style={{ color: "#EE85A8" }}>
            with your favorite idol NFTs!
          </span>
        </p>
        <p
          style={{
            borderRadius: "19px",
            textAlign: "left",
            color: "#656565",

            fontFamily: "Inter",
            fontSize: "10px",
            fontStyle: "normal",
            marginTop: "14.55px",
            fontWeight: "600",
            lineHeight: "normal",
            margin: "0",
          }}
        >
          Participate in saving the environment with your favorite idols through
          collecting carbon credit embedded idol NFTs!
        </p>
      </Grid>

      <Grid
        container
        item
        sx={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: "27px",
          position: "relative",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: " column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "19px",
            color: "#151F40",
            fontFamily: "Inter",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            margin: "26.45px 0 0 0",
            width: "144px",
            height: "210px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          You can display your own NFT idol group here!
          <img
            src={circledplus}
            alt="circledplus"
            style={{
              width: "20px",
              height: "auto",
              marginTop: "40px",
            }}
          />
        </Grid>
        <div
          style={{
            width: "264px",
            height: "69px",
            flexShrink: 0,
            borderRadius: "264px",
            background:
              "linear-gradient(180deg, #767676 40.32%, rgba(118, 118, 118, 0.00) 100%)",
            filter: "blur(10px)",
            position: "absolute",
            bottom: "5px",
          }}
        />
        <img
          src={stage}
          alt="stage"
          style={{
            width: "236px",
            height: "auto",
            transform: "translateY(-5px)",
            zIndex: "0",
          }}
        />
      </Grid>
      <Grid
        container
        item
        sx={{
          flexDirection: "column",

          marginTop: "27px",
        }}
      >
        <p
          style={{
            borderRadius: "19px",
            textAlign: "left",
            color: "#151F40",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            margin: "0 0 20px 0",
          }}
        >
          Tranding NFTs
        </p>
        <MainCarousel />
      </Grid>
      <MainBottom />
    </Grid>
  );
}
