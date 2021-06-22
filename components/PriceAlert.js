import React from 'react';

import { 
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';


const PriceAlert = ({customContainerStyle}) => {

 

  return (


      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 108,
          marginHorizontal: 24,
          paddingVertical: 24,
          paddingHorizontal: 12,
          backgroundColor: "#fff",
          borderRadius: 12,
          ...customContainerStyle,
          ...style.shadow
        }}
      >
        <Image
          source={require('../src/assets/icons/icon_notification_color.png')}
          style={{
            width: 30,
            height: 30
          }}
        />
        <View style={{flex: 1, marginLeft: 12}}>
          <Text style={{fontSize: 16, lineHeight: 22}}>Configuração de Notificações</Text>
          <Text style={{fontSize: 14, lineHeight: 22}}>Receba uma notificação de tarefa próxima, concluida, atrasada e pedida.</Text>
        </View>

        <Image
          source={require('../src/assets/icons/icon_right_arrow.png')}
          style={{
            width: 25,
            height: 25,
            tintColor: '#808080'
          }}
        />
      </TouchableOpacity>
  )

}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8
  }
})

export default PriceAlert;