import { Grid } from "@mui/material";
import "/src/App.css";
import "/src/index.css";
import arrowLeft from "../../assets/arrow_left.svg";
import photo from "../../assets/photo_3.svg";
import line from "../../assets/line.svg";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NFTDetailTable from "src/components/Table/NFTDetailTable";
import NFTDetailChart from "src/components/Chart/NFTDetailChart";
import BuyModal from "src/components/Modal/BuyModal";

export default function NFTDetail(): JSX.Element {
  const navigate = useNavigate();
  const [tab, setTab] = useState(1);
  const [open, setOpen] = useState(false);

  const goBack = () => {
    navigate(-1); // 뒤로가기 실행
  };

  return (
    <Grid container item sx={{ background: "#F5F5F5", marginBottom: "200px" }}>
      <Grid container item xs={12} sx={{ alignItems: "center" }}>
        <img
          src={arrowLeft}
          alt="back"
          style={{
            width: "15.6px",
            height: "auto",
          }}
          onClick={goBack}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "center", gap: "10px", marginTop: "19.29px" }}
      >
        <img
          src={photo}
          alt="photo"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={12}
            sx={{
              justifyContent: "center",
              gap: "24.5px",
              flexWrap: "nowrap",

              alignItems: "center",
            }}
          >
            <img
              src={line}
              alt={line}
              style={{
                width: "51.4px",
                height: "auto",
              }}
            />
            <p
              style={{
                color: "#000",
                fontFamily: "Inter",
                fontSize: "19.8px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                margin: "0 0 5px 0",
              }}
            >
              Jisoo #77
            </p>
            <img
              src={line}
              alt={line}
              style={{
                width: "51.4px",
                height: "auto",
              }}
            />
          </Grid>
          <p
            style={{
              color: "#000",
              fontFamily: "Inter",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              margin: "0",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sx={{ justifyContent: "center", gap: "10px", marginTop: "30px" }}
      >
        <Grid container item xs>
          <button
            style={{
              width: "100%",
              minWidth: "150px",
              height: "38px",
              flexShrink: "0",
              borderRadius: "19px",
              background: tab === 1 ? "#EE85A8" : "#D9D9D9",
              boxShadow:
                tab === 1
                  ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                  : "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
              border: "none",
              color: tab === 1 ? "#FFF" : "#000",
              textAlign: "center",
              lineHeight: "both",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
            }}
            onClick={() => setTab(1)}
          >
            Price
          </button>
        </Grid>
        <Grid container item xs>
          <button
            style={{
              width: "100%",
              minWidth: "150px",
              height: "38px",
              flexShrink: "0",
              borderRadius: "19px",
              background: tab === 2 ? "#EE85A8" : "#D9D9D9",
              boxShadow:
                tab === 2
                  ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                  : "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
              border: "none",
              color: tab === 2 ? "#FFF" : "#000",
              textAlign: "center",
              lineHeight: "both",

              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
            }}
            onClick={() => setTab(2)}
          >
            Quotes
          </button>
        </Grid>

        {tab === 1 && <NFTDetailTable />}
        {tab === 2 && <NFTDetailChart />}

        <Grid
          container
          item
          xs={12}
          sx={{ height: "1px", background: "#D9D9D9", margin: "11px 0 5px" }}
        />
        <Grid container item xs={12}>
          <Grid
            container
            item
            xs={12}
            sx={{ justifyContent: "space-between", padding: "6px 16px" }}
          >
            <p
              style={{
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                margin: "0",
              }}
            >
              2-hour volume
            </p>
            <p
              style={{
                color: "#151F40",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                margin: "0",
              }}
            >
              5
            </p>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{ justifyContent: "space-between", padding: "6px 16px" }}
          >
            <p
              style={{
                color: "#656565",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                margin: "0",
              }}
            >
              Lower limit
            </p>
            <p
              style={{
                color: "#151F40",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                margin: "0",
              }}
            >
              30 TON
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ height: "1px", background: "#D9D9D9", margin: "5px 0 11px" }}
        />
        <Grid container item xs={12} sx={{ justifyContent: "space-between" }}>
          <p
            style={{
              padding: "6px 16px",
              color: "#656565",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            Purchase
          </p>
          <p
            style={{
              boxSizing: "border-box",
              padding: "6px 16px",
              background: "#D9D9D9",
              width: "50%",
              textAlign: "right",
              color: "#151F40",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              margin: "0",
            }}
          >
            30 TON
          </p>
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ marginTop: "19px" }}>
        <button
          style={{
            width: "100%",
            minWidth: "150px",
            height: "38px",
            flexShrink: "0",
            borderRadius: "19px",
            background: tab === 2 ? "#EE85A8" : "#D9D9D9",
            boxShadow:
              tab === 2
                ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                : "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
            border: "none",
            color: tab === 2 ? "#FFF" : "#151F40",
            textAlign: "center",
            lineHeight: "both",

            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 700,
          }}
          onClick={() => {
            setTab(2);
            setOpen(true);
          }}
        >
          Buy
        </button>
        <BuyModal open={open} setOpen={setOpen} />
      </Grid>
    </Grid>
  );
}
