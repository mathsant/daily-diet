import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const ContainerSafe = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Container = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  margin-top: -20px;
  border-radius: 32px;
`;

export const Label = styled.Text`
  margin-top: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MEDIUM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const InputName = styled.TextInput`
  width: 100%;

  height: 48px;

  ${({ theme }) => css`
    border: ${theme.COLORS.GRAY_4} 1px solid;
  `}

  border-radius: 6px;

  margin-bottom: 10px;
`;

export const InputDateAndHour = styled.TextInput`
  width: 100%;
  height: 48px;

  ${({ theme }) => css`
    border: ${theme.COLORS.GRAY_4} 1px solid;
  `}
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const DescriptionContainer = styled.View`
  height: 130px;
`;

export const NameContainer = styled.View`
  height: 50px;
`;

export const DateAndHourContainer = styled.View`
  width: 100%;
  height: fit-content;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 28px;
`;

export const DateTimeContent = styled.View`
  flex: 1;
`;

export const OptionContainer = styled.View`
  width: 100%;
  flex: 1;
`;

export const OptionContent = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 10px;
  flex: 1;
`;
