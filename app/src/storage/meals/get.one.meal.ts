import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storage.config";
import { MealProps } from "./meal.dto";

export async function getOneMeal(mealId?: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealProps[] | [] = storage ? JSON.parse(storage) : [];

    const mealFound = meals.find((meal) => meal.data[0].id === mealId);

    if (!mealFound) {
      throw new Error("Refeição não encontrada");
    }

    return mealFound;
  } catch (error) {
    throw error;
  }
}
