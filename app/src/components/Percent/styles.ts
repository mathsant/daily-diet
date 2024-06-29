import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type PercentContainerStyleProps = "GREEN" | "RED";

type Props = {
  type: PercentContainerStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  border-radius: 8px;
  justify-content: center;
  align-items: center;

  margin-top: 33px;

  background-color: ${({ theme, type }) =>
    type === "GREEN" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LARGE}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const IconWrapper = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.BIG,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`;
