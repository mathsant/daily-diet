import { Image, Text } from "react-native";
import {
  BackToHomeButton,
  Container,
  ImageContainer,
  Title,
  TitleButton,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const successFeedbackLogo = "../../assets/illustration.png";
const failedFeedbackLogo = "../../assets/illustration_failed.png";

type RouteParams = {
  isDiet: boolean;
};

export function Feedback() {
  const navigator = useNavigation();
  const route = useRoute();

  function handleGoHomePage() {
    navigator.navigate("home");
  }

  const { isDiet } = route.params as RouteParams;

  return (
    <Container>
      <Title isSuccess={isDiet}>
        {isDiet ? "Continue Assim!" : "Que pena!"}
      </Title>
      <Text>
        {isDiet
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </Text>

      <ImageContainer>
        <Image
          source={
            isDiet ? require(successFeedbackLogo) : require(failedFeedbackLogo)
          }
        />
      </ImageContainer>

      <BackToHomeButton onPress={handleGoHomePage}>
        <TitleButton>Ir para página inicial</TitleButton>
      </BackToHomeButton>
    </Container>
  );
}
