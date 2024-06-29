import { useNavigation } from "@react-navigation/native";
import { Button } from "../Button";
import { Container, Title } from "./styles";

export function MealsHeader() {
  const navigator = useNavigation();

  function handleNewMeal() {
    navigator.navigate("newMeal");
  }

  return (
    <Container>
      <Title>Refeições</Title>
      <Button title="Nova Refeição" onPress={handleNewMeal} />
    </Container>
  );
}
