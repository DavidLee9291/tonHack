import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import arrowLeft from "../../assets/arrow_left.svg";
import idol3 from "../../assets/photo_list_3.svg";
import idol4 from "../../assets/photo_list_4.svg";
import idol1 from "../../assets/photo_list_1.svg";
import idol2 from "../../assets/photo_list_2.svg";
import idol5 from "../../assets/photo_list_5.svg";
import idol6 from "../../assets/photo_list_6.svg";
import dot from "../../assets/dot.svg";

const idols = [
  {
    id: "1",
    image: idol1,
    name: "Jisoo ",
    number: "#77",
    nftPrice: "30",
    creator: "david lee",
    creatorPrice: "30",
  },
  {
    id: "2",
    image: idol2,
    name: "Rosé",
    number: "#86",
    nftPrice: "6",
    creator: "david lee",
    creatorPrice: "6",
  },
  {
    id: "3",
    image: idol3,
    name: "Jennie",
    number: "#77",
    nftPrice: "6",
    creator: "david lee",
    creatorPrice: "6",
  },
  {
    id: "4",
    image: idol4,
    name: "Lisa",
    number: "#23",
    nftPrice: "6",
    creator: "david lee",
    creatorPrice: "6",
  },
  {
    id: "5",
    image: idol5,
    name: "aespa",
    number: "5",
    nftPrice: "6",
    creator: "david lee",
    creatorPrice: "6",
  },
  {
    id: "6",
    image: idol6,
    name: "aespa",
    number: "6",
    nftPrice: "6",
    creator: "david lee",
    creatorPrice: "6",
  },
];

export default function IdolList(): JSX.Element {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기 실행
  };

  return (
    <Grid container item sx={{ backgroud: "#F5F5F5", marginBottom: "30px" }}>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid container item xs={12} sx={{ gap: "14px", alignItems: "center" }}>
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
            Select Your Idol!
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{
          marginTop: "17px",
          justifyContent: "center",
          gap: "4.1px 5%",
        }}
      >
        {idols.map((idol, index) => (
          <Grid
            key={index}
            item
            xs
            style={{
              flex: "0 0 auto",
              minWidth: "60px",
              maxWidth: "200px",
              width: "100%",
              aspectRatio: "150.349/233.725",
              background: "#FFF",
              borderRadius: "5.88px",
              padding: "12px 4px",
              marginLeft: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "5.88px",
                backgroundImage: `url(${idol.image})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%", // 이미지를 약간 아래쪽으로 이동시킴
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <Grid
              container
              item
              style={{
                width: "95%",
                background: "rgba(119, 119, 119, 0.26)",
                borderRadius: "3.973px",
                border: "0.298px solid #FFF",
                padding: "10px",
                display: "flex",

                justifyContent: "center",
                zIndex: 10,
                backdropFilter: "blur(3.4170305728912354px)",
              }}
            >
              <Grid
                container
                item
                xs={12}
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxHeight: "fit-content",
                }}
              >
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "9px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    margin: "0",
                  }}
                >
                  {idol.name} #{idol.number}
                </p>

                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "9px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    margin: "0",
                  }}
                >
                  {idol.nftPrice} TON
                </p>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Grid
                  container
                  item
                  xs={6}
                  sx={{
                    alignItems: "center",
                    gap: "2.3px",
                    padding: "6.67px 0",
                  }}
                >
                  <img
                    src={dot}
                    alt="dot"
                    style={{
                      width: "10px",
                      height: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p
                    style={{
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontSize: "9px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      margin: "0",
                    }}
                  >
                    {idol.creator}
                  </p>
                </Grid>
                <p
                  style={{
                    color: "#FFF",
                    fontFamily: "Inter",
                    fontSize: "9px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    margin: "0",
                  }}
                >
                  {idol.creatorPrice} TON
                </p>
              </Grid>
              <Link key={index} to={`/tonHack/nftDetail/:${idol.id}`}>
                <button
                  style={{
                    width: "100%",
                    background: "rgba(255, 255, 255, 0.39)",
                    color: "#FFF",
                    border: "0.298px solid #FFF",
                    borderRadius: "2.979px",
                    padding: "8px 16px",
                    marginTop: "8px",
                    cursor: "pointer",
                    backdropFilter: "blur(1.9863028526306152px)",
                  }}
                >
                  Collect Now
                </button>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
