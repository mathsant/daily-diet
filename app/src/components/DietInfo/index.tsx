import { Container, InfoCard, TitleInfoCard, DescInfoCard } from "./styles";

type Props = {
  insideDietValue: number;
  outsideDietValue: number;
};

export function DietInfo({ insideDietValue, outsideDietValue }: Props) {
  return (
    <Container>
      <InfoCard type="SUCCESS">
        <TitleInfoCard>{insideDietValue}</TitleInfoCard>
        <DescInfoCard>refeições dentro da dieta</DescInfoCard>
      </InfoCard>
      <InfoCard type="FAIL">
        <TitleInfoCard>{outsideDietValue}</TitleInfoCard>
        <DescInfoCard>refeições fora da dieta</DescInfoCard>
      </InfoCard>
    </Container>
  );
}
