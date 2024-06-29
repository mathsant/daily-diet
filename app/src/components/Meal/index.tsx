import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Hour,
  IconStatus,
  InfoContainer,
  Separator,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  hour: string;
  isDiet: boolean;
};

export function Meal({ title, hour, isDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Hour>{hour}</Hour>

      <Separator />

      <InfoContainer>
        <Title>{title}</Title>
        <IconStatus isDiet={isDiet} />
      </InfoContainer>
    </Container>
  );
}
