import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { useState, useEffect } from "react";
import "./styles.css";
import HamburgerMenu from "./HamburgerMenu";

import { AddBox, RemoveBox } from "./styledComponents";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export default function ButtonAppBar() {
  const [{ basket }, dispatch] = useStateValue();

  // making media query more efficent
  const [widthState, setWidthState] = useState(window.innerWidth);
  useEffect(() => {
    // Step 3: Add an event listener to update the screen width when the window resizes
    const handleResize = () => {
      setWidthState(window.innerWidth);
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          background: "rgb(42,42,42)",
          background:
            "linear-gradient(-90deg, rgba(42,42,42,1) 0%, rgba(224,219,219,1) 100%)"
        }}
      >
        <Toolbar
          className="navBar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 20px"
          }}
        >
          <Box sx={{ width: "15%", display: "flex", alignItems: "center" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box
                className="header-logo-name-container"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box className="header__logo">
                  <StorefrontIcon />
                </Box>
                <Box
                  className="header-shopName-container"
                  sx={{ margin: "0 5px" }}
                >
                  <h4 className="header-shopName" sx={{ fontize: "20px" }}>
                    Ivan Gallery
                  </h4>
                </Box>
              </Box>
            </Link>
          </Box>
          {console.log(widthState)}
          <Box
            className="search-container"
            sx={{ width: "100%", padding: "0 5%" }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder=""
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          {/*---------*/}
          <Box
            className=""
            width={{
              display: "flex",
              width: "15%",
              justifyContent: "space-around",
              alignItems: "center",
              marginLeft: "3%"
            }}
          >
            <RemoveBox widthState={widthState}>
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Box
                  className="navItem"
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Box sx={{ fontSize: "11px" }}>
                    {" "}
                    <span className="navItemOne">Hello Guest</span>
                  </Box>
                  <Box sx={{ fontWeight: "bold" }}>
                    {" "}
                    <span className="navItemTwo">Sign In</span>{" "}
                  </Box>
                </Box>
              </Link>
            </RemoveBox>

            <RemoveBox
              widthState={widthState}
              className="navItem"
              sx={{
                flexDirection: "column",
                margin: "0 8px"
              }}
            >
              <Box sx={{ fontSize: "11px" }}>
                {" "}
                <span className="navItemOne">Your </span>
              </Box>
              <Box sx={{ fontWeight: "bold" }}>
                <span className="navItemTwo">Shop</span>
              </Box>
            </RemoveBox>

            <Link
              to="/checkout"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Box
                className="navitem"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                {/* I need to remove */}
                <Box>
                  <span className="navItemOne">
                    <ShoppingBasketIcon sx={{ color: "white" }} />
                  </span>
                </Box>
                <Box sx={{ margin: "0 10px" }}>
                  <span className="navItemTwo"> {basket.length}</span>
                </Box>
                {/*---------*/}
              </Box>
            </Link>
            <AddBox
              widthState={widthState}
              className="navItemThree"
              sx={{ margin: "0 10px" }}
            >
              <span>
                <HamburgerMenu />
              </span>
            </AddBox>
          </Box>

          {/*---------*/}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
