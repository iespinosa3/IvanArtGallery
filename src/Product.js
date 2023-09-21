import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useStateValue } from "./StateProvider";
import "./styles.css";

const MARGIN_SEPERATION = { margin: "10px 0" };

export default function Product({ id, title, image, price, rating, qty }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
   
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        qty: qty
      }
    });
  };
  return (
    <>
      <Box>
        <Box
          className="product"
          sx={{ margin: "10px", background: "white", padding: "20px" }}
        >
          <Box className="product-info">
            <Typography sx={{ fontWeight: "Bold", fontSize: "25px" }}>
              {title}
            </Typography>
            <Typography sx={MARGIN_SEPERATION} className="product-price">
              ${price}.00
            </Typography>
            <Typography sx={MARGIN_SEPERATION} className="product-rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <Typography
                    className="star-rating"
                    sx={{ display: "inline", fontSize: "15px", color: "grey" }}
                  >
                    <span> ⭐</span>
                  </Typography>
                ))}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img width="" height="300px" src={image} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={addToBasket}
              variant="contained"
              sx={{
                margin: "10px",
                background: "rgb(42,42,42)",
                background:
                  "linear-gradient(360deg, rgba(42,42,42,1) 0%, rgba(224,219,219,1) 100%)"
              }}
            >
              Add to Basket
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
