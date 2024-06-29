import { Text } from "react-native";
import {
  Container,
  StatisticsContainer,
  StatisticHeader,
  Title,
  IconWrapper,
  GeneralStatisticsTitle,
} from "./styles";
import { SequenceCard } from "../../components/SequenceCard";
import { DietInfo } from "../../components/DietInfo";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { MealProps } from "../../storage/meals/meal.dto";
import { getAllMeals } from "../../storage/meals/get.all.meals";
import { mostFrequencyMeal } from "../../lib/most.frequency.meal";
import { formatPercentage } from "../../lib/format.percentage";
import { ActionType } from "../../components/Header/styles";

export function Statistic() {
  const navigation = useNavigation();

  const [data, setData] = useState<MealProps[]>([]);

  async function fetchStatistics() {
    try {
      const fetchData = await getAllMeals();
      setData(fetchData);
    } catch (error) {
      console.log(error);
    }
  }

  let type: ActionType;

  const meals = data.map((meal) => meal.data).flat();

  const mostFrequencyOnDiet = mostFrequencyMeal(meals);
  const totalMeals = meals.length;
  const totalMealsInsideDiet = meals.filter((meal) => meal.isOnDiet).length;
  const totalMealsOutsideDiet = meals.length - totalMealsInsideDiet;

  const formattedPercentageInDiet = formatPercentage(
    totalMealsInsideDiet,
    totalMeals
  );

  if (
    parseFloat(totalMeals > 0 ? formattedPercentageInDiet : "0,00%") <=
    parseFloat("50,00")
  ) {
    type = "NOT_DIET_MEAL";
  } else {
    type = "DIET_MEAL";
  }

  function handleToHome() {
    navigation.navigate("home");
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container>
      <StatisticHeader type={type} onPress={handleToHome}>
        <IconWrapper />
        <Title>{formattedPercentageInDiet}</Title>
        <Text>das refeições dentro da dieta</Text>
      </StatisticHeader>
      <StatisticsContainer>
        <GeneralStatisticsTitle>Estatisticas Gerais</GeneralStatisticsTitle>
        <SequenceCard
          desc="melhor sequência de pratos dentro da dieta"
          value={mostFrequencyOnDiet}
        />
        <SequenceCard desc="refeições registradas" value={totalMeals} />
        <DietInfo
          insideDietValue={totalMealsInsideDiet}
          outsideDietValue={totalMealsOutsideDiet}
        />
      </StatisticsContainer>
    </Container>
  );
}
