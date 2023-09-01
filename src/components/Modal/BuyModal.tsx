import React, { useState, useEffect } from "react";
import "/src/App.css";
import "/src/index.css";
import { Grid, Modal } from "@mui/material";
import bag from "../../assets/bag.svg";
import { Link } from "react-router-dom";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BuyModal({ open, setOpen }: Props) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setOpen(false);
    window.onscroll = null;
    // 모달 열려있을 때 뒷 배경 스크롤 방지 해제
    document.documentElement.style.overflow = "auto";
    // 모달을 닫으면 구매 모달부터 보이도록 수정
    setVisible(true);
  };

  useEffect(() => {
    if (open) {
      // 모달 열려있을 때 뒷 배경 스크롤 방지
      document.documentElement.style.overflow = "hidden";
    }
  }, [open]);

  const handleVisible = () => {
    setVisible(false);
    handleClose();
  };

  function AddModal() {
    const handleBuy = () => {
      setVisible(false);
    };

    //  TODO: 데이터 바인딩 필요

    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={{
            top: "20%",
          }}
        >
          <Grid container item style={{ outline: "0" }}>
            <Grid
              style={{
                outline: "0",
                margin: "auto",
                width: "80%",
                maxWidth: "248px",
                height: "320px",
                borderRadius: "5.8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFF",
                position: "relative",
                padding: "20px 21px",
                border: 0,
              }}
            >
              <img
                src={bag}
                alt="bag"
                style={{
                  borderRadius: "15px",
                  width: "68.9",
                  height: "68.9px",
                  objectFit: "cover", // Make sure the image fills the container
                }}
              />

              <Grid
                container
                item
                gap="10px"
                style={{
                  width: "100%",
                  marginTop: "31px",
                }}
              >
                <Grid
                  container
                  item
                  xs={12}
                  style={{ width: "100%", gap: "6px", flexDirection: "column" }}
                >
                  <p
                    style={{
                      boxSizing: "border-box",
                      textAlign: "center",
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "17.448px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      margin: "0",
                    }}
                  >
                    Are you sure <br /> you want to buy?
                  </p>

                  <p
                    style={{
                      boxSizing: "border-box",
                      textAlign: "center",
                      color: "#656565",
                      fontFamily: "Inter",
                      fontSize: "8px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",

                      margin: "6px 0 0 0",
                    }}
                  >
                    you will not be able to recover them afterworks
                  </p>
                </Grid>

                <Grid
                  container
                  item
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "column",
                  }}
                >
                  <button
                    id="buyAndKeepButton"
                    onClick={handleBuy}
                    style={{
                      width: "100%",
                      maxWidth: "143.692px",
                      height: "33.336px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "21.841px",
                      background: "#007AFF",
                      fontFamily: "Source Sans Pro",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      border: "0",
                      boxShadow:
                        "0px 4.59813px 4.59813px 0px rgba(0, 0, 0, 0.25)",
                      margin: "11px 0 0 0",
                    }}
                  >
                    <p
                      style={{
                        padding: "2px 8px",
                        color: "#FFF",
                        fontFamily: "Source Sans Pro",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "150%",
                      }}
                    >
                      Yes
                    </p>
                  </button>
                  <button
                    id="buyAndKeepButton"
                    onClick={handleClose}
                    style={{
                      maxWidth: "fit-content",
                      border: "none",
                      background: "transparent",
                      scale: "0.8",
                    }}
                  >
                    <p
                      style={{
                        color: "#656565",
                        fontFamily: "Inter",
                        fontSize: "8px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                      }}
                    >
                      Cancle
                    </p>
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
  }

  // 요청성공 모달
  function TransactionModal() {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          top: "18%",
        }}
      >
        <Grid container item>
          <Grid
            style={{
              outline: "0",
              margin: "auto",
              width: "80%",
              maxWidth: "400px",
              borderRadius: "5.8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#FFF",
              position: "relative",
              padding: "20px 39.4px",
              border: 0,
            }}
          >
            <Grid container item>
              <Grid
                item
                container
                justifyContent="space-between"
                align-items="center"
              >
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "#656565",
                      fontFamily: "Inter",
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    Transaction Success
                  </p>
                  <p
                    style={{
                      color: "#656565",
                      fontFamily: "Inter",
                      fontSize: "9px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      textAlign: "center",
                      margin: "0",
                    }}
                  >
                    You successfully bought NFT
                  </p>
                </Grid>
              </Grid>

              <Grid
                item
                container
                style={{ width: "100%", margin: "10px 0", gap: "11px" }}
              >
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "#007AFF",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Status
                  </p>
                  <p
                    style={{
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Competed
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "#007AFF",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Transaction ID
                  </p>
                  <p
                    style={{
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    0x1dh384C...dggE66
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "#007AFF",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    NFT contract
                  </p>
                  <p
                    style={{
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Tep-0062
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p
                    style={{
                      color: "#007AFF",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    Token ID
                  </p>
                  <p
                    style={{
                      color: "#151F40",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "160%",
                      textAlign: "left",
                      margin: "0",
                    }}
                  >
                    2288
                  </p>
                </Grid>
              </Grid>

              <Grid
                item
                container
                sx={{ justifyContent: "center", marginTop: "20px" }}
              >
                {/* TODO: 임시 링크 id 추후 수정 필요 */}
                <Link to="/tonHack/1" style={{ width: "100%" }}>
                  <button
                    onClick={handleVisible}
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "32px",
                      background: "#007AFF",
                      fontFamily: "Source Sans Pro",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      border: "0",
                      boxShadow:
                        "0px 4.59813px 4.59813px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Source Sans Pro",
                        fontSize: "13px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "160%",
                        margin: "0",
                      }}
                    >
                      View My Profile
                    </p>
                  </button>
                </Link>
                <button
                  id="buyAndKeepButton"
                  onClick={handleClose}
                  style={{
                    maxWidth: "fit-content",
                    border: "none",
                    background: "transparent",
                    scale: "0.8",
                  }}
                >
                  <p
                    style={{
                      color: "#656565",
                      fontFamily: "Inter",
                      fontSize: "8px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    Cancle
                  </p>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    );
  }

  return <>{visible ? <AddModal /> : <TransactionModal />}</>;
}
