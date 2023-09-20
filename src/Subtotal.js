import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CurrencyFormat from "react-currency-format";
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
        {console.log(basket)}
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal-gifts">
                <input type="checkbox" /> This order is a gift.
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

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
