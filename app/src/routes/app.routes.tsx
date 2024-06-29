import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { MealActions } from "../screens/MealActions";
import { Feedback } from "../screens/Feedback";
import { MealDetail } from "../screens/MealDetail";
import { MealEdit } from "../screens/EditMeal";
import { Statistic } from "../screens/Statistic";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistic} />
      <Screen name="newMeal" component={MealActions} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetail" component={MealDetail} />
      <Screen name="mealUpdate" component={MealEdit} />
    </Navigator>
  );
}
