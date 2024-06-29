import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-top: 20px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  margin-bottom: 3px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;
