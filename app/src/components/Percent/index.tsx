import { Text, TextInputProps } from "react-native";
import { Container, IconWrapper, Title } from "./styles";

type Props = {
  percentageValue: string;
  isOnDiet: boolean;
  onPress: () => void;
};

export function Percent({ percentageValue, isOnDiet, onPress }: Props) {
  return (
    <Container onPress={onPress} type={isOnDiet ? "GREEN" : "RED"}>
      <Title>{percentageValue}</Title>
      <Text>das refeições dentro da dieta</Text>
      <IconWrapper />
    </Container>
  );
}
