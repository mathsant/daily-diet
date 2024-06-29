import { MealDTO, MealProps } from "../storage/meals/meal.dto";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newMeal: undefined;
      statistics: undefined;
      feedback: {
        isDiet: boolean;
      };
      mealDetail: {
        meal: MealDTO;
      };
      mealUpdate: {
        meal: MealDTO;
      };
    }
  }
}
