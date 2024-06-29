import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Plus } from "phosphor-react-native";

type Props = {
  isLightMode: boolean;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  width: 100%;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, isLightMode }) => css`
    background-color: ${isLightMode ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    border: 1px solid ${isLightMode ? theme.COLORS.GRAY_1 : null};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, isLightMode }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${isLightMode ? theme.COLORS.GRAY_1 : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const IconButton = styled(Plus).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XBIG,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 10px;
`;
