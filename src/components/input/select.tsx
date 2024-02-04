import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

type Props = {
  options: any[];
  onClick?: any;
  title?: string;
  default_value?: string;
};
export const SelectOptions = ({
  onClick,
  options,
  title,
  default_value,
}: Props) => {
  const [age, setAge] = React.useState(default_value || "");

  const handleChange = (event: any) => {
    setAge(event.target.value);
    onClick(event.target.value);
  };

  React.useEffect(() => {
    onClick(default_value);
  }, []);

  return (
    // <FormControl className="bg-white rounded-md h-6" sx={{ p: 1, minWidth: 120 }} size="small">
    //   <InputLabel id="demo-select-small-label">{title}</InputLabel>
    <div className="flex h-6 items-center justify-center gap-2 rounded-md bg-white px-1">
      <div className="text-sm">{title}</div>
      <Select
        className="h-5 min-w-[120px] bg-white"
        placeholder={title}
        value={age}
        label={title}
        onChange={handleChange}
      >
        {options?.length &&
          options.map((m) => <MenuItem value={m}>{m}</MenuItem>)}
      </Select>
    </div>
    // </FormControl>
  );
};
