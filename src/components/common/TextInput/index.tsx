import {TextInputProps} from "./types";
import * as S from "./style";
import {forwardRef} from "react";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({children, customStyle, ...args}: TextInputProps, ref) => {
    return <S.Input {...args} ref={ref} />;
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
