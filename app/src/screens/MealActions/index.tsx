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
import { useState } from "react";
import { MealDTO } from "../../storage/meals/meal.dto";
import { mealCreate } from "../../storage/meals/create.meal";
import { useNavigation } from "@react-navigation/native";

export function MealActions() {
  const navigator = useNavigation();

  const [mealName, setMealName] = useState("");
  const [mealDesc, setMealDesc] = useState("");
  const [mealDate, setMealDate] = useState("");
  const [mealHour, setMealHour] = useState("");
  const [isDiet, setIsDiet] = useState(true);

  async function handleCreateMeal() {
    try {
      const newMealToCreate: MealDTO = {
        name: mealName,
        date: mealDate,
        description: mealDesc,
        hour: mealHour,
        isOnDiet: isDiet,
      };

      await mealCreate(newMealToCreate);
      navigator.navigate("feedback", { isDiet });
    } catch (error) {
      Alert.alert("Nova Refeição", `${error}`);
    }
  }

  return (
    <Container
      enabled={Platform.OS === "ios" ? true : false}
      behavior="padding"
    >
      <Header title="Nova refeição" type="EDITING_OR_CREATING" />
      <Content>
        <Label>Nome</Label>
        <NameContainer>
          <Input
            numberOfLines={5}
            textAlignVertical={"top"}
            maxLength={220}
            onChangeText={setMealName}
            value={mealName}
          />
        </NameContainer>

        <Label>Descrição</Label>
        <DescriptionContainer>
          <Input
            numberOfLines={5}
            multiline
            textAlignVertical={"top"}
            maxLength={220}
            onChangeText={setMealDesc}
            value={mealDesc}
          />
        </DescriptionContainer>

        <DateAndHourContainer>
          <DateTimeContent>
            <Label>Data</Label>
            <Input onChangeText={setMealDate} />
          </DateTimeContent>
          <DateTimeContent>
            <Label>Hora</Label>
            <Input onChangeText={setMealHour} />
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
        <Button showIcon onPress={handleCreateMeal} title="Adicionar" />
      </Content>
    </Container>
  );
}
