import { Platform, Text } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {
  Container,
  Content,
  MealDateAndHourTitle,
  MealTag,
  MealText,
  MealTitle,
  IconStatus,
  ButtonWrapper,
} from "./styles";
import { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { getOneMeal } from "../../storage/meals/get.one.meal";
import { Modal } from "../../components/Modal";
import { MealDTO } from "../../storage/meals/meal.dto";

type RouteParams = {
  meal: MealDTO;
};

export function MealDetail() {
  const navigator = useNavigation();
  const route = useRoute();

  const { meal } = route.params as RouteParams;

  async function handleEditMeal() {
    return navigator.navigate("mealUpdate", { meal });
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const [mealName, setMealName] = useState(meal.name);
  const [mealDesc, setMealDesc] = useState(meal.description);
  const [mealDate, setMealDate] = useState(meal.date);
  const [mealHour, setMealHour] = useState(meal.hour);
  const [isDiet, setIsDiet] = useState(meal.isOnDiet);

  return (
    <Container
      enabled={Platform.OS === "ios" ? true : false}
      behavior="padding"
    >
      <Header
        title="Detalhes"
        type={meal.isOnDiet ? "DIET_MEAL" : "NOT_DIET_MEAL"}
      />
      <Content>
        <MealTitle>{mealName}</MealTitle>
        <Text>{mealDesc}</Text>

        <MealDateAndHourTitle>Data e Hora</MealDateAndHourTitle>
        <Text>
          {mealDate} ás {mealHour}
        </Text>

        <MealTag>
          <IconStatus isDiet={isDiet} />
          <MealText>{isDiet ? "dentro da dieta" : "fora da dieta"}</MealText>
        </MealTag>
      </Content>
      <Modal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        id={meal.id as string}
        date={mealDate}
      />
      <ButtonWrapper>
        <Button
          showIcon
          onPress={handleEditMeal}
          title="Editar refeição"
          isLightMode
        />
        <Button
          showIcon
          onPress={() => setModalVisible(true)}
          title="Excluir refeição"
        />
      </ButtonWrapper>
    </Container>
  );
}
