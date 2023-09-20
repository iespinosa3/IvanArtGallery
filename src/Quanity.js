import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HomeGridItems from "./HomeGridItems";

export default function SelectSmall() {
  const [number, setNumber] = React.useState(1);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120, color: "darkgray" }} size="small">
        <InputLabel id="demo-select-small-label">Qty</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={number}
          label="Qty"
          onChange={handleChange}
        >
          <MenuItem value={0}>0</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
