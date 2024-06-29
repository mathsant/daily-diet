import { Dispatch, SetStateAction } from "react";
import { Modal as ReactNativeModal } from "react-native";
import { ButtonWrapper, Container, Overlay, Title } from "./styles";
import { Button } from "../Button";
import { removeMeal } from "../../storage/meals/remove.meal";
import { useNavigation } from "@react-navigation/native";

type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  date: string;
  id: string;
};

export function Modal({
  isModalVisible,
  setModalVisible,
  id,
  date,
}: ModalProps) {
  const navigation = useNavigation();

  async function handleRemoveMeal(id: string, date: string) {
    try {
      await removeMeal(id, date);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    } finally {
      setModalVisible(false);
    }
  }

  return (
    <ReactNativeModal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      statusBarTranslucent
      onRequestClose={() => setModalVisible(false)}
    >
      <Overlay>
        <Container>
          <Title>Deseja realmente excluir o registro da refeição?</Title>

          <ButtonWrapper>
            <Button
              title="Cancelar"
              isLightMode
              onPress={() => setModalVisible(false)}
              showIcon={true}
            />

            <Button
              title="Sim, excluir"
              onPress={() => handleRemoveMeal(id, date)}
              showIcon={true}
            />
          </ButtonWrapper>
        </Container>
      </Overlay>
    </ReactNativeModal>
  );
}
