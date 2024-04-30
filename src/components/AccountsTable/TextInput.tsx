import { Input, InputRef } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import { AccountsContextDispatcher } from "../../state/AccountsContext";
import { onBlurHandler } from "./actions";
import type { BlurEvent, TextInputProps } from "./types";

function TextInput(props: TextInputProps) {
  const dispatch = useContext(AccountsContextDispatcher);
  const { defaultValue } = props;
  const [hasError, setHasError] = useState(false);
  const status = hasError ? "error" : "";
  const ref = useRef<InputRef>(null);
  useEffect(() => {
    if (!defaultValue) {
      ref.current?.focus();
    }
  }, [defaultValue]);

  const onBlur = (event: BlurEvent) => {
    onBlurHandler(event, props, setHasError, dispatch);
  };

  return (
    <Input
      className="w-full"
      defaultValue={defaultValue}
      status={status}
      onBlur={onBlur}
      ref={ref}
    />
  );
}

export default TextInput;
