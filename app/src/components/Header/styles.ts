import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ActionType = "EDITING_OR_CREATING" | "DIET_MEAL" | "NOT_DIET_MEAL";

type Props = {
  type: ActionType;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;

  height: 130px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "EDITING_OR_CREATING"
      ? theme.COLORS.GRAY_5
      : type === "DIET_MEAL"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const BackButton = styled(ArrowLeft).attrs(({ theme }) => ({}))`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BIG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Spacer = styled.View`
  flex: 1;
`;
