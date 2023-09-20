import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/material/TextField";
import "@fontsource/inter";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import firebaseApp from "./firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  function signIn(e) {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        history("/");
      })
      .catch((error) => alert(error.message));
  }

  function register(e) {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  }

  return (
    <>
      {console.log(email, password)}
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "0 200px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "30px 0"
          }}
        >
          <Box
            className="store-icon-container"
            sx={{ display: "flex", alignItems: "center", margin: "20px 0" }}
          >
            <Box className="store-icon">
              {" "}
              <StorefrontIcon sx={{ fontSize: "40px", color: "darkgray" }} />
            </Box>
            <Box className="store-name">
              {" "}
              <Typography level="h1" fontSize="xl">
                Ivan Gallary
              </Typography>
            </Box>
          </Box>
          <Box
            className="sign-container"
            sx={{
              border: "1px solid darkgrey",
              padding: "20px",
              display: "flex",
              flexDirection: "column",

              width: "300px"
            }}
          >
            <Box className="sign-Header" sx={{ margin: " 20px 0" }}>
              <Typography level="h1" fontSize="xl">
                Sign-In
              </Typography>
            </Box>
            <Box className="sign-email">
              <Typography level="title-sm" fontSize="l">
                Email
              </Typography>
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box className="sign-password" sx={{ margin: " 20px 0" }}>
              <Typography level="title-sm" fontSize="l">
                Password
              </Typography>
              <TextField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              className="sign-Button"
              sx={{ textAlign: "center", margin: " 20px 0" }}
            >
              <Button
                onClick={signIn}
                sx={{ background: "lightgrey", color: "white", width: "100%" }}
              >
                Sign In
              </Button>
            </Box>
            <Box className="sign-acknowledgment">
              <Typography level="title-sm">
                By clicking this button you agree to the terms and services of
                this website.
              </Typography>
            </Box>
            <Box
              className="sign-create-account"
              sx={{ textAlign: "center", margin: " 20px 0" }}
            >
              <Button
                onClick={register}
                sx={{ background: "lightgrey", color: "white", width: "100%" }}
              >
                Create your Account
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
} //end
