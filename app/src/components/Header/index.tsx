import { useNavigation } from "@react-navigation/native";
import { ActionType, BackButton, Container, Spacer, Title } from "./styles";

type Props = {
  type: ActionType;
  title: string;
};

export function Header({ type, title }: Props) {
  const navigator = useNavigation();

  function handleGoHome() {
    navigator.navigate("home");
  }

  return (
    <Container type={type} onPress={handleGoHome}>
      <BackButton />
      <Title>{title}</Title>
      <Spacer />
    </Container>
  );
}
