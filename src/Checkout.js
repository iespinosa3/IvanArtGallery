import React, { useState } from "react";
import ButtonAppBar from "./navBar";
import Box from "@mui/material/Box";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

export default function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Box className="check-out">
        <ButtonAppBar />
        <Box sx={{ margin: " 0 20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "20px",
              justifyContent: "space-between"
            }}
          >
            <Box
              sx={{ height: "200px", width: "74%" }}
              className="checkout-left"
            >
              <Box
                className="advertisment"
                sx={{ height: "190px", overflow: "hidden" }}
              >
                <img
                  style={{ width: "100%", opacity: "0.8" }}
                  alt="product"
                  src=" https://pbs.twimg.com/media/ENIUI_aXsAAc8IV?format=jpg&name=4096x4096"
                />
              </Box>

              <h2>Your Shopping Basket</h2>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  qty={item.qty}
                />
              ))}
            </Box>
            {console.log(basket)}
            <Box
              sx={{ height: "200px", width: "25%" }}
              className="checkout-right"
            >
              {" "}
              <Subtotal />
            </Box>
          </Box>
          <Box
            sx={{ borderBottom: "1px solid lightgrey", margin: " 50px 0" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
