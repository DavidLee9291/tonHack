import { Grid } from "@mui/material";
import "/src/App.css";
import "/src/index.css";
import bell from "../../assets/bell.svg";
import SearchBar from "../../components/Search/SearchBar";
import arrowLeft from "../../assets/arrow_left.svg";
import sm from "../../assets/sm.svg";
import hive from "../../assets/hive.svg";
import jyp from "../../assets/jyp.svg";
import bighit from "../../assets/bighit.svg";
import cube from "../../assets/cube.svg";
import yg from "../../assets/yg.svg";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const agencies = [
  { image: hive, name: "Hive", description: "entertainment" },
  { image: sm, name: "SM", description: "entertainment" },
  { image: yg, name: "YG", description: "entertainment" },
  { image: bighit, name: "Big Hit", description: "entertainment" },
  { image: jyp, name: "JYP", description: "entertainment" },
  { image: cube, name: "Cube", description: "entertainment" },
];

export default function Search(): JSX.Element {
  const navigate = useNavigate();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  useEffect(() => {
    // 이동한 다음 페이지의 최상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isKeyboardVisible =
        window.innerHeight > document.documentElement.clientHeight;
      setKeyboardVisible(isKeyboardVisible);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const goBack = () => {
    navigate(-1); // 뒤로가기 실행
  };
  return (
    <Grid container item sx={{ backgroud: "#F5F5F5", marginBottom: "200px" }}>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid container item xs={3} sx={{ gap: "14px", alignItems: "center" }}>
          <img
            src={arrowLeft}
            alt="back"
            style={{
              width: "13px",
              height: "auto",
            }}
            onClick={goBack}
          />
          <p
            style={{
              color: "#000",
              fontFamily: "Source Sans Pro",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "150%",
              margin: "0",
            }}
          >
            Search
          </p>
        </Grid>
        <img src={bell} alt="bell" style={{ width: "18px", height: "20px" }} />
      </Grid>
      <Grid container item sx={{ marginTop: "13px" }}>
        <SearchBar />
      </Grid>
      <Grid
        container
        item
        sx={{ marginTop: "17px", justifyContent: "space-between" }}
      >
        <p
          style={{
            color: "#656565",
            fontFamily: "Source Sans Pro",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            margin: "0",
          }}
        >
          Search Results
        </p>
        <p
          style={{
            color: "#656565",
            fontFamily: "Source Sans Pro",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            margin: "0",
          }}
        >
          0 Found
        </p>
      </Grid>
      <Grid
        container
        item
        sx={{
          marginTop: "17px",
          justifyContent: "center",
          gap: "7px 5%",
          padding: "0 0 30px 0",
          overflowY: keyboardVisible ? "scroll" : "hidden",
          maxHeight: keyboardVisible ? "calc(100vh - 300px)" : "none",
        }}
      >
        {agencies.map((agency, index) => (
          <Link
            key={index}
            to={`/tonHack/idolList/:${index}`}
            style={{ textDecoration: "none" }}
          >
            <Grid
              item
              style={{
                flex: "0 0 auto",
                minWidth: "60px",
                maxWidth: "100px",
                width: "100%",
                height: "132.8px",
                background: "#FFF",
                borderRadius: "5.88px",
                boxShadow: "0px 5.88046px 8.23264px 0px rgba(0, 0, 0, 0.25)",
                padding: "12px 4px",
                marginLeft: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={agency.image}
                alt={agency.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "63px",
                  borderRadius: "2.48px",
                }}
              />
              <Grid
                container
                item
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <Grid
                  container
                  item
                  sx={{
                    justifyContent: "center",
                    padding: "0 8px",
                    margin: "12.4px 0 4px 0",
                  }}
                >
                  <p
                    style={{
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "14.274px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      margin: "0",
                    }}
                  >
                    {agency.name}
                  </p>
                </Grid>
                <p
                  style={{
                    color: "#151F40",
                    fontFamily: "Inter",
                    fontSize: "10.2px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    margin: "0",
                  }}
                >
                  {agency.description}
                </p>
              </Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    </Grid>
  );
}
