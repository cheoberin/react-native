import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import mock from "./src/mocks/cesta";
import Cesta from './src/telas/Cesta';

import AppLoading from 'expo-app-loading';


export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return (
      <AppLoading />
    )
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
