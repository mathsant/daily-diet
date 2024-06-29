import styled, { css } from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.35);
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 327px;
  height: 192px;
  padding: 40px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin-bottom: 32px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;
