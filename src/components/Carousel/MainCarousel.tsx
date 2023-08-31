import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import photo_1 from "../../assets/photo_1.svg";
import photo_2 from "../../assets/photo_2.svg";
import photo_4 from "../../assets/photo_4.jpg";
import line from "../../assets/line.svg";
import { Grid } from "@mui/material";

interface Item {
  image: string;
  number: string;
  description: string;
}

interface CarouselProps {
  items: Item[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <SwipeableViews
      index={currentIndex}
      onChangeIndex={handleChangeIndex}
      style={{ display: "flex", overflow: "visible" }}
      slideStyle={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "240px",
      }}
      containerStyle={{
        display: "flex",
        width: "183px",
        transition: "transform 0.3s ease-in-out",
        overflow: "visible",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
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
            src={item.image}
            alt={item.number}
            style={{ width: "100%", height: "127px", borderRadius: "2.48px" }}
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
                alt={line}
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
                {item.number}
              </p>
              <img
                src={line}
                alt={line}
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
              {item.description}
            </p>
          </Grid>
        </div>
      ))}
    </SwipeableViews>
  );
};

const MainCarousel: React.FC = () => {
  const items: Item[] = [
    {
      image: photo_1,
      number: "Jennie #77",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    },
    {
      image: photo_2,
      number: "Lisa #23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    },
    {
      image: photo_4,
      number: "Crystal Card 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    },
  ];

  return (
    <div style={{ width: "100%", display: "flex", overflow: "hidden" }}>
      <Carousel items={items} />
    </div>
  );
};

export default MainCarousel;
