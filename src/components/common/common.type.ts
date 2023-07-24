import {CSSObject} from "@emotion/react";
import {PropsWithChildren} from "react";

export interface CommonComponentProps extends PropsWithChildren {
  customStyle?: CSSObject;
}
