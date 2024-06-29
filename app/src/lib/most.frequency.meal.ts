import { MealDTO } from "../storage/meals/meal.dto";

export function mostFrequencyMeal(meal: MealDTO[]) {
  let streak = 0;
  let bestStreak = 0;
  meal.forEach((meal) => {
    if (meal.isOnDiet === true) {
      streak++;
    } else {
      streak = 0;
    }
    if (streak > bestStreak) {
      bestStreak = streak;
    }
  });
  return bestStreak;
}
