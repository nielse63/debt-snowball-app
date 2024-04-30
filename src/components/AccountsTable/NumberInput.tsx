import { InputNumber } from "antd";
import { useContext, useState } from "react";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import { onBlurHandler } from "./actions";
import type { BlurEvent, NumberInputProps } from "./types";

function NumberInput(props: NumberInputProps) {
  const dispatch = useContext(AccountsContextDispatcher);
  const { defaultValue } = props;
  const [hasError, setHasError] = useState(false);
  const status = hasError ? "error" : "";

  const onBlur = (event: BlurEvent) => {
    onBlurHandler(event, props, setHasError, dispatch);
  };

  return (
    <InputNumber
      className="w-full"
      min={0}
      defaultValue={defaultValue}
      status={status}
      onBlur={onBlur}
      {...props.options}
    />
  );
}

export default NumberInput;
