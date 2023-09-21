import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./styles.css";

import SelectSmall from "./Quanity";
export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Box
        className="subtotal"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgray",
          padding: "20px"
        }}
      >
        
              <p>
                Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
              </p>
              <small className="subtotal-gifts">
                <input type="checkbox" /> This order is a gift.
              </small>
            

        <Button
          className="checkout-button"
          sx={{
            background: "darkgrey",
            color: "white",
            width: "100px",
            margin: "20px 0"
          }}
        >
          Checkout
        </Button>
      </Box>
    </>
  );
}
