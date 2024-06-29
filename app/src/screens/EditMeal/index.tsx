import { Alert, Platform } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { SelectButton } from "../../components/SelectButton";
import {
  Container,
  Content,
  DateAndHourContainer,
  DateTimeContent,
  DescriptionContainer,
  Label,
  NameContainer,
  OptionContainer,
  OptionContent,
} from "./styles";
import { useCallback, useState } from "react";
import { MealDTO } from "../../storage/meals/meal.dto";
import { mealCreate } from "../../storage/meals/create.meal";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getOneMeal } from "../../storage/meals/get.one.meal";
import { updateMeal } from "../../storage/meals/update.meal";
import { getAllMeals } from "../../storage/meals/get.all.meals";

type RouteParams = {
  meal: MealDTO;
};

export function MealEdit() {
  const navigator = useNavigation();
  const route = useRoute();

  const { meal } = route.params as RouteParams;

  const [mealName, setMealName] = useState(meal.name);
  const [mealDesc, setMealDesc] = useState(meal.description);
  const [mealDate, setMealDate] = useState(meal.date);
  const [mealHour, setMealHour] = useState(meal.hour);
  const [isDiet, setIsDiet] = useState(meal.isOnDiet);

  async function handleUpdateMeal() {
    try {
      const newMealUpdate: MealDTO = {
        name: mealName,
        date: mealDate,
        description: mealDesc,
        hour: mealHour,
        isOnDiet: isDiet,
      };

      await updateMeal(meal.id as string, mealDate, newMealUpdate);
      navigator.navigate("home");
    } catch (error) {
      Alert.alert("Ero ao atualizar refeição", `${error}`);
    }
  }

  return (
    <Container
      enabled={Platform.OS === "ios" ? true : false}
      behavior="padding"
    >
      <Header title="Editar Refeição" type="EDITING_OR_CREATING" />
      <Content>
        <Label>Nome</Label>
        <NameContainer>
          <Input
            textAlignVertical={"top"}
            maxLength={220}
            onChangeText={setMealName}
            value={mealName}
            returnKeyType="done"
          />
        </NameContainer>

        <Label>Descrição</Label>
        <DescriptionContainer>
          <Input
            multiline
            numberOfLines={5}
            textAlignVertical={"bottom"}
            maxLength={220}
            onChangeText={setMealDesc}
            value={mealDesc}
            returnKeyType="done"
          />
        </DescriptionContainer>

        <DateAndHourContainer>
          <DateTimeContent>
            <Label>Data</Label>
            <Input
              onChangeText={setMealDate}
              value={mealDate}
              editable={false}
              selectTextOnFocus={false}
              isDisabled
            />
          </DateTimeContent>
          <DateTimeContent>
            <Label>Hora</Label>
            <Input
              onChangeText={setMealHour}
              value={mealHour}
              editable={false}
              selectTextOnFocus={false}
              isDisabled
            />
          </DateTimeContent>
        </DateAndHourContainer>

        <OptionContainer>
          <Label>Está dentro da dieta?</Label>
          <OptionContent>
            <SelectButton
              title="Sim"
              type="ON_DIET"
              onPress={() => setIsDiet(true)}
              isActive={isDiet === true ? true : false}
            />
            <SelectButton
              title="Não"
              type="OUT_DIET"
              onPress={() => setIsDiet(false)}
              isActive={isDiet === false ? true : false}
            />
          </OptionContent>
        </OptionContainer>
        <Button showIcon onPress={handleUpdateMeal} title="Atualizar" />
      </Content>
    </Container>
  );
}
