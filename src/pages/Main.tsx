import { Grid } from "@mui/material";
import "/src/App.css";
import "/src/index.css";
import bell from "../assets/bell.svg";
import stage from "../assets/stage.svg";
import circledplus from "../assets/circledplus.svg";
import photo1 from "../assets/photo_list_1.svg";
import line from "../assets/line.svg";
import MainCarousel from "../components/Carousel/MainCarousel";
import MainBottom from "../components/Menu/MainBottom";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Main(): JSX.Element {
  const { id } = useParams();
  useEffect(() => {
    // 이동한 다음 페이지의 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container item sx={{ backgroud: "#F5F5F5" }}>
      <Grid container item sx={{ justifyContent: "space-between" }}>
        <p
          style={{
            borderRadius: "19px",
            background: "#FFF",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            color: "#007AFF",
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
        <Grid container item xs>
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
            <span style={{ color: "#007AFF" }}>
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
            Participate in saving the environment with your favorite idols
            through collecting carbon credit embedded idol NFTs!
          </p>
        </Grid>
        <Grid
          container
          item
          sx={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "27px",
            position: "relative",
          }}
        >
          {/* TODO: 임시로 id로 보이게만 하였습니다. 수정 필요합니다.*/}
          {id ? (
            <Grid
              container
              item
              sx={{
                marginTop: "18px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  zIndex: 10,
                  flex: "0 0 auto",
                  width: "143px",
                  height: "210px",
                  background: "#FFF",
                  borderRadius: "5.88px",
                  boxShadow: "0px 5.88046px 8.23264px 0px rgba(0, 0, 0, 0.25)",
                  padding: "8px",
                  marginLeft: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={photo1}
                  alt="photo"
                  style={{
                    width: "100%",
                    height: "127px",
                    borderRadius: "2.48px",
                  }}
                />
                <Grid container item style={{ textAlign: "center" }}>
                  <Grid
                    container
                    item
                    sx={{
                      justifyContent: "space-between",
                      padding: "0 8px",
                      margin: "8px 0 4px 0",
                    }}
                  >
                    <img
                      src={line}
                      alt="line"
                      style={{
                        width: "24px",
                        height: "auto",
                      }}
                    />
                    <p
                      style={{
                        color: "#000",
                        fontFamily: "Inter",
                        fontSize: "8px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        margin: "0",
                      }}
                    >
                      Jisoo #77
                    </p>
                    <img
                      src={line}
                      alt="line"
                      style={{
                        width: "24px",
                        height: "auto",
                      }}
                    />
                  </Grid>
                  <p
                    style={{
                      color: "#000",
                      fontFamily: "Inter",
                      fontSize: "7px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      scale: "0.9",
                      margin: "0",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                </Grid>
              </div>
            </Grid>
          ) : (
            <Link to={`idolList/${1}`} style={{ textDecoration: "none" }}>
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
            </Link>
          )}

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
              bottom: "-4px",
            }}
          />
        </Grid>
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
