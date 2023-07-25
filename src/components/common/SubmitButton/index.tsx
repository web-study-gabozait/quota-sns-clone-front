import * as S from "./style";
import {SubmitButtonProps} from "./types";

const SubmitButton = ({children, customStyle, ...args}: SubmitButtonProps) => {
  return (
    <S.Button customStyle={customStyle} {...args}>
      {children}
    </S.Button>
  );
};

export default SubmitButton;
