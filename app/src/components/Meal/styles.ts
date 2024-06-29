import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { Circle } from "phosphor-react-native";

type Props = {
  isDiet?: boolean;
};

export const Container = styled(TouchableOpacity)`
  width: 100%;

  min-height: 49px;
  max-height: 49px;

  padding: 12px;

  border-radius: 6px;
  border: ${({ theme }) => theme.COLORS.GRAY_5} 1px solid;

  align-items: center;
  flex-direction: row;
  margin-top: 8px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.GRAY_2};
    padding-right: 12px;
  `}
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`;

export const Separator = styled.View`
  border: ${({ theme }) => theme.COLORS.GRAY_4} 1px;
  height: 14px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const IconStatus = styled(Circle).attrs<Props>(({ theme, isDiet }) => ({
  size: theme.FONT_SIZE.MEDIUM,
  color: isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  weight: "fill",
}))``;
