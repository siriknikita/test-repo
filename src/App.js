import React, { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";


function App() {
  const inputRef = useRef(null);
  const [quantity, setQuantity] = useState(1);

  const handleInputOnChange = (e) => {
    setQuantity(e.target.value);
  }

  const handleInputOnBlur = () => {
    if (quantity === "") {
      setQuantity(1);
    }
  }

  const handleOnKeyUp = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  }

  return (
    <NumericFormat
      key="regular-cart-step"
      allowNegative={false}
      customInput={Input}
      type="number"
      inputProps={{
        step: 1,
        inputMode: "numeric",
      }}
      inputRef={inputRef}
      disableUnderline
      value={quantity}
      valueIsNumericString
      onChange={handleInputOnChange}
      onBlur={handleInputOnBlur}
      onKeyUp={handleOnKeyUp}
    />
  );
}

export default App;
