import { Circle } from "phosphor-react-native";
import { KeyboardAvoidingView } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isDiet?: boolean;
};

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;

  gap: 6px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  margin-top: -20px;
  border-radius: 32px;
`;

export const ButtonWrapper = styled.View`
  padding: 24px;
  justify-content: flex-end;
`;

export const MealTitle = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BIG}px;
  `}
`;

export const MealDateAndHourTitle = styled.Text`
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
  `}
`;

export const MealTag = styled.View`
  height: 34px;
  width: 144px;

  margin-top: 10px;

  flex-direction: row;

  border-radius: 100px;

  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_5};
  `}
`;

export const MealText = styled.Text`
  margin-left: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SMALL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const IconStatus = styled(Circle).attrs<Props>(({ theme, isDiet }) => ({
  size: theme.FONT_SIZE.MEDIUM,
  color: isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: "fill",
}))``;
