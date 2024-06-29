import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "../storage.config";
import { MealProps } from "./meal.dto";

export async function getAllMeals(): Promise<MealProps[]> {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
