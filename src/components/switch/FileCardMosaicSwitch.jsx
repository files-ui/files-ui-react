import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function FileCardMosaicSwitch({
  value,
  onChange,
  withInput = false,
}) {
  //const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    //setValue(event.target.value);
    onChange?.(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Component</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        row="horizontal"
      >
        <FormControlLabel
          value="FileMosaic"
          control={<Radio />}
          label={withInput ? "<FileMosaic/> & <Dropzone/>" : "<FileMosaic/>"}
        />
        <FormControlLabel
          value="FileCard"
          control={<Radio />}
          label={withInput ? "<FileCard/> & <FileCard/>" : "<FileCard/>"}
        />
      </RadioGroup>
    </FormControl>
  );
}
