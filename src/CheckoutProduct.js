import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import MARGIN_SEPERATION from "./Product";
import { useStateValue } from "./StateProvider";
import SelectSmall from "./Quanity";

export default function CheckoutProduct({
  id,
  title,
  image,
  rating,
  price,
  qty
}) {
  const [{ basket }, dispatch] = useStateValue();

  function RemoveFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  }
  return (
    <>
      <Box
        className="checkout"
        sx={{ display: "flex", justifyContent: "left", margin: " 30px 0" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginRight: "20px"
          }}
        >
          <img width="100%" height="150px" src={image} />
        </Box>
        <Box className="checkout-product-title">
          <Typography sx={{ fontWeight: "Bold", fontSize: "25px" }}>
            {title}
          </Typography>
          <Typography sx={{}} className="product-price">
            ${price}.00
          </Typography>
          <Typography sx={{}} className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Typography
                  sx={{ display: "inline", fontSize: "25px", color: "grey" }}
                >
                  <span> ⭐</span>
                </Typography>
              ))}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={RemoveFromBasket}
              variant="contained"
              sx={{
                margin: "10px",
                background: "rgb(42,42,42)",
                background:
                  "linear-gradient(90deg, rgba(42,42,42,1) 0%, rgba(224,219,219,1) 100%)"
              }}
            >
              Remove from Basket
            </Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
