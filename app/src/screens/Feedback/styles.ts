import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
  isSuccess: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;

  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Title = styled.Text<Props>`
  margin-bottom: 20px;
  ${({ theme, isSuccess }) => css`
    color: ${isSuccess ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XBIG}px;
  `}
`;

export const ImageContainer = styled.View`
  height: 280px;
  width: 220px;

  margin: 10px 0;
`;

export const BackToHomeButton = styled(TouchableOpacity)`
  width: 190px;
  height: 50px;

  border-radius: 6px;

  align-items: center;
  justify-content: center;

  margin-top: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_1};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const TitleButton = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
