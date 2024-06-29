import styled, { css } from "styled-components/native";

export type InfoCardStyleProps = "SUCCESS" | "FAIL";

type Props = {
  type: InfoCardStyleProps;
};

export const Container = styled.View`
  width: 100%;

  min-height: 107px;
  max-height: 107px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoCard = styled.View<Props>`
  width: 48%;

  align-items: center;
  justify-content: center;

  height: 107px;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
    type === "SUCCESS" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TitleInfoCard = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XBIG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const DescInfoCard = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SMALL};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
