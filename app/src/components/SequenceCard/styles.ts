import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  height: 89px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  padding: 16px;

  margin-bottom: 15px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const SequenceNumber = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XBIG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DietInfosContainer = styled.View`
  height: 89px;
  width: 100%;
  flex-direction: row;
`;
