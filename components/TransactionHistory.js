import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground
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

const TransactionHistory = ({customContainerStyle, history}) => {


   const renderItem = ({item}) => (
     <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8
        }}
        onPress={() => console.log(item)}
     >
       <Image
           source={require('../src/assets/icons/icon_history.png')}
           style={{
             width: 30,
             height: 30,
             tintColor: '#7F5DF0'
           }}
       />
       <View style={{flex: 1, marginLeft: 12}}>
          <Text style={{...style.fonth3}}>{item.description}</Text>
          <Text style={{color: '#6A6A6A', ...style.body4}}>{item.date}</Text>
       </View>

      <View style={{flexDirection: 'row', height: '100%', alignItems: 'center'}}>
        <Text>{item.amount} {item.currency}</Text>
        <Image
           source={require('../src/assets/icons/icon_right_arrow.png')}
           style={{
             width: 20,
             height: 20,
             tintColor: '#6A6A6A'
           }}
        />
      </View>

     </TouchableOpacity>
   )

  return (
    <View
       style={{
         marginTop: 24,
         marginHorizontal: 24,
         padding: 20,
         borderRadius: 8,
         backgroundColor: '#fff',
         ...customContainerStyle
       }}
    >
        <Text style={{fontSize: 22, lineHeight: 30,}}>Próximas Atividades</Text>
        <FlatList
           contentContainerStyle={{ marginTop: 12}}
           scrollEnabled={false}
           data={history}
           keyExtractor={item => `${item.id}`}
           renderItem={renderItem}
           showsVerticalScrollIndicator={false}
           ItemSeparatorComponent={() => {
             return (
               <View style={{width: '100%', height: 1, backgroundColor: '#dbdbdb'}}></View>
             )
           }}
        />
    </View>
  )
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 10,
}, 
  fonth1: {
    fontFamily: 'ExtraBold',
    fontSize: 30
},
fonth2: {
  fontFamily: 'ExtraBold',
  fontSize: 22
},
body4: {
  fontFamily: 'Poppins_400Regular',
  fontSize: 14,
  lineHeight: 22
},
body5: {
  fontFamily: 'ExtraBold',
  fontSize: 12
},
fonth3: {
  fontFamily: 'ExtraBold',
  fontSize: 16
}
})

export default TransactionHistory;