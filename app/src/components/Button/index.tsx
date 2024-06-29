import { Container, IconButton, Title } from "./styles";

type Props = {
  title: string;
  showIcon: boolean;
  onPress: () => void;
  isLightMode?: boolean;
};

export function Button({
  onPress,
  title,
  showIcon,
  isLightMode = false,
}: Props) {
  return (
    <Container onPress={onPress} isLightMode={isLightMode}>
      {showIcon ?? <IconButton />}
      <Title isLightMode={isLightMode}>{title}</Title>
    </Container>
  );
}
