import { Text } from "react-native";
import { Container, SequenceNumber } from "./styles";

type Props = {
  value: number;
  desc: string;
};

export function SequenceCard({ desc, value }: Props) {
  return (
    <Container>
      <SequenceNumber>{value}</SequenceNumber>
      <Text>{desc}</Text>
    </Container>
  );
}
