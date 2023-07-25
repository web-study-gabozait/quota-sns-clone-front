import {InputHTMLAttributes, MutableRefObject, RefObject} from "react";
import {CommonComponentProps} from "../common.type";

export interface TextInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<CommonComponentProps, "children"> {
  ref?: RefObject<HTMLInputElement>;
}
