import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

export const RemoveBox = styled(Box)(({ widthState }) => ({
  display: Number(widthState) < 800 ? "none" : "block"
}));

export const AddBox = styled(Box)(({ widthState }) => ({
  display: Number(widthState) < 800 ? "block" : "none"
}));
