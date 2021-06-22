import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
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
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'Organize-se',
    title2: '& Estude',
    text: 'Utilize a nossa ferramenta de organização.',
    image: require('../../assets/images/screen4.png')
  },
  {
    key: '2',
    title: 'Está perdido',
    title2: 'com os diversos',
    title3: 'conteúdos?',
    text: 'Deixe a gente tentar te ajudar. Experimente nossa ferramenta de montagem de horários.',
    image: require('../../assets/images/screen2.png')
  },
  {
    key: '3',
    title: ' Pronto para',
    title2: 'obter uma força',
    title3: 'extra nos estudos?',
    text: 'Configure seu método de estudo de acordo com sua rotina. Vamos lá?',
    image: require('../../assets/images/screen3.png')
  },
];

export default function Slider({ navigation }) {

  let [fontsLoaded, error ] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    ExtraBold: Poppins_700Bold,
  });




  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }) {
    return(
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '40%',
            width: '100%',
            marginTop: '30%',

          }}
        />
          <Text 
          style={{
            fontSize: 23,
            fontFamily: "ExtraBold",
            color: 'rgba(253, 116, 155, 1)',
            alignSelf: 'center'


          }}>
            {item.title}
          </Text>

          <Text 
          style={{
            fontSize: 23,
            fontFamily: "ExtraBold",
            color: 'rgba(120, 90, 220, 1)',
            alignSelf: 'center'


          }}>
            {item.title2}
          </Text>

          <Text 
          style={{
            fontSize: 23,
            fontFamily: "ExtraBold",
            color: 'rgba(90, 50, 220, 1)',
            alignSelf: 'center',
            marginBottom: 5

          }}>
            {item.title3}
          </Text>

          <Text
          style={{
            paddingBottom: 10,
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
            color: '#000',
            textAlign: 'center'
            
          }}>
            {item.text}
          </Text>
      </View>
    )
  }




  if(showHome){
    <Text>ENTROU NA HOME</Text>
  } else {
    return (
      
     <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#8B43B3',
          width: 30
        }}
        renderNextButton={ () => <Text style={{fontSize: 17, color: '#808080'}}>Next</Text>}
        renderDoneButton={ () => <View style={{fontFamily: "Poppins_400Regular", fontSize: 20}}>
        <Button
          title="CONTINUE"
          color="rgb(253, 116, 155)"
          onPress={ () => navigation.navigate('Home')}
          />  
        </View>}

     />
    );
  }

  
}
