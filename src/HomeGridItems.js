import { Box } from "@mui/material";
import Product from "./Product";
import "./styles.css";

export default function HomeGridItems() {
  return (
    <>
      <Box sx={{ background: "lightgrey" }}>
        <Box className="home-row" sx={{ display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            <Product
              id="1000"
              title="Usian Bolt"
              price={40}
              rating={5}
              image="https://pbs.twimg.com/media/ENIUI_aXsAAc8IV?format=jpg&name=4096x4096"
              qty={[]}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <Product
              id="1001"
              title="Tim Duncan"
              price={40}
              rating={5}
              image="https://pbs.twimg.com/media/EX6SYaSWAAIfiPp?format=jpg&name=4096x4096"
              qty={[]}
            />
          </Box>
        </Box>
        <Box className="home-row home-row-a" sx={{ display: "flex" }}>
          <Box sx={{ width: "33.25%" }}>
            <Product
              id="1002"
              title="Lebron James"
              price={40}
              rating={5}
              image="https://pbs.twimg.com/media/DmGimwRXoAAWsSm?format=jpg&name=large"
              qty={[]}
            />
          </Box>
          <Box sx={{ width: "33.25%" }}>
            <Product
              id="1003"
              title="Woman"
              price={40}
              rating={4}
              image="https://pbs.twimg.com/media/Dts8WJIU8AAX80X?format=jpg&name=small"
              qty={[]}
            />
          </Box>
          <Box sx={{ width: "33.25%" }}>
            <Product
              id="1004"
              title="Beloved"
              price={40}
              rating={4}
              image="https://pbs.twimg.com/media/EBEB5DOXoAA5HF-?format=jpg&name=small"
              qty={[]}
            />
          </Box>
        </Box>

        <Box className="home-row home-row-d" sx={{ display: "flex" }}>
          <Box sx={{ width: "100%" }}>
            <Product
              id="1004"
              title="Collage"
              price={40}
              rating={5}
              image="https://pbs.twimg.com/media/DkUpgN6WwAAfHlm?format=jpg&name=small"
              qty={[]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
