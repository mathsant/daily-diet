import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isDisabled?: boolean;
};

export const Container = styled(TextInput)<Props>`
  flex: 1;

  min-height: 48px;

  padding: 12px;

  ${({ theme, isDisabled }) => css`
    border: ${theme.COLORS.GRAY_4} 1px solid;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    background-color: ${isDisabled ? theme.COLORS.GRAY_5 : null};
  `}

  border-radius: 6px;
  margin-bottom: 10px;
`;
