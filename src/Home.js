import Box from "@mui/material/Box";
import ButtonAppBar from "./navBar.js";
import HomeGridItems from "./HomeGridItems.js";

export default function Home() {
  return (
    <>
      <Box className="HomePage" sx={{}}>
        <ButtonAppBar />
        <Box sx={{ height: "350px", overflow: "hidden" }}>
          <img
            style={{ width: "100%", opacity: "0.8" }}
            alt="product"
            src=" https://pbs.twimg.com/media/ENIUI_aXsAAc8IV?format=jpg&name=4096x4096"
          />
        </Box>

        <HomeGridItems style={{ zIndex: "-10" }} />
        <Box
          style={{
            height: "100px",
            width: "100%",
            background: "rgb(42,42,42)",
            background:
              "linear-gradient(90deg, rgba(42,42,42,1) 0%, rgba(224,219,219,1) 100%)"
          }}
        />
      </Box>
    </>
  );
}
