import { registerRootComponent } from "expo";
import { ThemeProvider } from "styled-components";
import { Text, StatusBar } from "react-native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Text>Não carregou</Text>}
    </ThemeProvider>
  );
}

registerRootComponent(App);
