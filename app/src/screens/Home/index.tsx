import { Container, DateTitle, HomeHeader, Logo } from "./styles";
import { Avatar } from "react-native-elements";

import logoImg from "../../assets/logo.png";
import personImg from "../../assets/eu.jpg";
import { Percent } from "../../components/Percent";
import { MealsHeader } from "../../components/MealsHeader";
import { Meal } from "../../components/Meal";
import { Alert, SectionList, Text } from "react-native";
import { useCallback, useState } from "react";
import { getAllMeals } from "../../storage/meals/get.all.meals";
import { MealDTO, MealProps } from "../../storage/meals/meal.dto";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../../storage/storage.config";
import { formatPercentage } from "../../lib/format.percentage";

type MealRender = {
  title: string;
  data: MealDTO[];
};

export function Home() {
  const navigator = useNavigation();

  const [meal, setMeal] = useState<MealRender[]>([]);

  async function fetchMeals() {
    try {
      // removeItemValue(MEALS_COLLECTION);
      const data = await getAllMeals();
      setMeal(data);
    } catch (error) {
      Alert.alert("Dados", "Não foi possível recuperar os dados.");
    }
  }

  const meals = meal.map((meal) => meal.data).flat();
  const totalMealsInDiet = meals.filter((meal) => meal.isOnDiet).length;
  const totalMeals = meals.length;

  const formattedPercentageInDiet = formatPercentage(
    totalMealsInDiet,
    totalMeals
  );

  function handleGoToMealDetail(meal: MealDTO) {
    return navigator.navigate("mealDetail", { meal });
  }

  function handleGoToStatistics() {
    return navigator.navigate("statistics");
  }

  // async function removeItemValue(key: string) {
  //   try {
  //     await AsyncStorage.removeItem(key);
  //     return true;
  //   } catch (exception) {
  //     return false;
  //   }
  // }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />
        <Avatar rounded size={"small"} source={personImg} />
      </HomeHeader>

      <Percent
        onPress={handleGoToStatistics}
        percentageValue={formattedPercentageInDiet}
        isOnDiet
      />

      <MealsHeader />

      <SectionList
        sections={meal}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item: meal }) => (
          <Meal
            onPress={() => handleGoToMealDetail(meal)}
            title={meal.name}
            hour={meal.hour}
            isDiet={meal.isOnDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateTitle>{title}</DateTitle>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text>Não deu.</Text>}
      />
    </Container>
  );
}
