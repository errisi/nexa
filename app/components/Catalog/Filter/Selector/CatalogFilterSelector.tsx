import { FC } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type Props = {
  label: string;
  list: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const CatalogFilterSelector: FC<Props> = ({
  label,
  list,
  value,
  setValue,
}) => (
  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      label={label}
    >
      {list.map((genre) => (
        <MenuItem key={genre} value={genre}>
          {genre}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
