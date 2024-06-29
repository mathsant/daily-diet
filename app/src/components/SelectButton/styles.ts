import styled, { css } from "styled-components/native";

export type ButtonDietTypeStyleProps = {
  type: "ON_DIET" | "OUT_DIET";
  isActive?: boolean;
};

type Props = ButtonDietTypeStyleProps;

export const Container = styled.TouchableOpacity<Props>`
  width: 160px;
  height: 50px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ theme, type, isActive }) => css`
    background-color: ${isActive
      ? true && type === "ON_DIET"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_5};
    border: 1px solid
      ${isActive
        ? true && type === "ON_DIET"
          ? theme.COLORS.GREEN_LIGHT
          : theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_7};
  `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 10000px;
  background-color: ${({ theme, type }) =>
    type === "ON_DIET" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
