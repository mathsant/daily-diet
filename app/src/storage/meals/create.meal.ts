import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./get.all.meals";
import { MEALS_COLLECTION } from "../storage.config";
import { MealDTO, MealProps } from "./meal.dto";
import uuid from "react-native-uuid";

export async function mealCreate(newMealDto: MealDTO) {
  try {
    const storedMeals = await getAllMeals();

    const dataByDate = storedMeals.find(
      (item) => item.title === newMealDto.date
    );

    if (dataByDate) {
      dataByDate.data = [...dataByDate.data, newMealDto];
      return AsyncStorage.setItem(
        MEALS_COLLECTION,
        JSON.stringify(storedMeals)
      );
    }

    const newMeal: MealProps = {
      title: newMealDto.date,
      data: [
        {
          id: uuid.v4(),
          date: newMealDto.date,
          description: newMealDto.description,
          hour: newMealDto.hour,
          name: newMealDto.name,
          isOnDiet: newMealDto.isOnDiet ?? false,
        },
      ],
    };

    const storage = [...storedMeals, newMeal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
