import { SafeAreaProvider } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { ActionType } from "../../components/Header/styles";

type Props = {
  type: ActionType;
};

export const Container = styled(SafeAreaProvider)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const StatisticHeader = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>
    type === "EDITING_OR_CREATING"
      ? theme.COLORS.GRAY_5
      : type === "DIET_MEAL"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};

  padding: 70px;

  align-items: center;
`;

export const IconWrapper = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 60px;
  left: 30px;
`;

export const StatisticsContainer = styled.View`
  flex: 1;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 0 24px;

  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LARGE}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const GeneralStatisticsTitle = styled.Text`
  padding: 23px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BIG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;
