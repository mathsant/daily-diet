import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storage.config";
import { MealDTO, MealProps } from "./meal.dto";
import { getAllMeals } from "./get.all.meals";

export async function updateMeal(
  mealId: string,
  date: string,
  updatedMeal: MealDTO
) {
  try {
    const storageData = await getAllMeals();
    const dataByDate = storageData.find((item) => item.title === date);

    if (dataByDate) {
      const meal = dataByDate.data.find((item) => item.id === mealId);
      if (meal) {
        meal.date = updatedMeal.date;
        meal.name = updatedMeal.name;
        meal.description = updatedMeal.description;
        meal.isOnDiet = updatedMeal.isOnDiet;
      }
      await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storageData));
    }
  } catch (error) {
    throw error;
  }
}
