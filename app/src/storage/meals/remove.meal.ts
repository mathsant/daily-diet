import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./get.all.meals";
import { MEALS_COLLECTION } from "../storage.config";

export async function removeMeal(mealId: string, mealDate: string) {
  try {
    const storage = await getAllMeals();

    const filtered = storage.find((item) => item.title === mealDate);

    if (filtered) {
      const filteredMealsByDate = filtered.data.filter(
        (meal) => meal.id !== mealId
      );
      filtered.data = filteredMealsByDate;
      const updatedStorage = storage.filter(
        (item) => item.title !== filtered.title
      );

      await AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(
          filteredMealsByDate.length === 0 ? updatedStorage : storage
        )
      );
    }
  } catch (error) {
    throw error;
  }
}
