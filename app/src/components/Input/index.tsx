import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";

export type InputType = "LARGE" | "NORMAL";

type InputProps = TextInputProps & {
  type?: InputType;
  inputRef?: React.RefObject<TextInput>;
  isDisabled?: boolean;
};

export function Input({
  inputRef,
  type = "NORMAL",
  isDisabled = false,
  ...rest
}: InputProps) {
  return (
    <Container isDisabled={isDisabled} ref={inputRef} {...rest}></Container>
  );
}
