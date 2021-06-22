import { StatusBar } from 'expo-status-bar';
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

import {dummyData} from '../../../constants'

import { PriceAlert, TransactionHistory } from '../../../components'

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


const Home = () => {

  let [fontsLoaded, error ] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    ExtraBold: Poppins_700Bold,
  });

  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
  const [transactionHistory, setTransactionHistory] = React.useState(dummyData.transactionHistory)


  function renderHeader() {

    const renderItem = ({item, index}) => (
      <View>
      <TouchableOpacity
        style={{
          width: 200,
          paddingHorizontal: 24,
          paddingVertical: 24,
          marginLeft: index == 0 ? 24 : 0,
          marginRight: 12,
          borderRadius: 12,
          backgroundColor: '#fff',
          borderBottomColor: '#000',
          ...style.shadow
        }}
      >

        {/* Currency */}
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                  source={item.image}
                  resizeMode='cover'
                  style={{
                    marginTop: 5,
                    width: 25,
                    height: 25
                  }}
              />
            </View>
            <View style={{ marginLeft: 8}}>
                <Text style={{...style.fonth2}}>{item.currency}</Text>
                <Text style={{ color:'#808080', ...style.body3}}>{item.code}</Text>
            </View>
          </View>
        {/* Value */}
          <View style={{ marginTop: 12}}>
              <Text style={{...style.fonth2}}>{item.amount}</Text>
              <Text style={{ color: item.type == "I" ? '#00ff00' : '#ff0000', ...style.fonth3}}>{item.changes}</Text>
          </View>
      </TouchableOpacity>
 </View>
    )

    return (
      <View 
      style={{
        width: "100%",
        height: 300,
      }}
    >
        <ImageBackground
          source={require('../../assets/images/bg_home.png')}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >

          {/*Header*/}

          <View
          style={{
            marginTop: 18,
            width: '100%',
            alignItems: 'flex-end',
            paddingHorizontal: 24,
          }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                top: 20,
                left: 15,
                alignItems: 'center',
                justifyContent: "center",
                
              }}
              onPress={() => console.log("Notification on pressed")}
            >
              <Image
                source={require('../../assets/icons/icon_notification_white.png')}
                resizeMode="contain"
                style={{flex: 1}}
              />
            </TouchableOpacity>
          </View>

          {/*PrincipalTheme*/}

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: "center",
                }}
              >
                <Text style={{color: '#fff', ...style.fonth3}}>Seus Resumos Ativos</Text>
                <Text style={{marginTop: 8, color: '#fff', ...style.fonth1}}>{dummyData.portfolio.balance}</Text>
                <Text style={{color: '#fff', ...style.body5}}>{dummyData.portfolio.changes}</Text>
              </View>

          {/*Trending*/}
              <View
                style={{
                  position: 'absolute',
                  bottom: '-30%',
                }}
              >
                <Text style={{ marginLeft: 24, color: "#fff", ...style.fonth2}}>Em curso</Text>

                  <FlatList
                      contentContainerStyle={{marginTop: 10}}
                      data={trending}
                      renderItem={renderItem}
                      keyExtractor={item => `${item.id}`}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                  />

              </View>



        </ImageBackground>
      </View>
    )
  }

  function renderAlert() {
    return (
      <PriceAlert />
    )
  }

  function renderNotice() {
    return(
      <View
         style={{
           marginTop: 20,
           marginHorizontal: 12,
           padding: 20,
           borderRadius: 15,
           backgroundColor: '#5D2DFD',
           ...style.shadow
         }}
      >
          <Text style={{color: "#fff", ...style.fonth3}}>Cuidado com o horário</Text>
          <Text style={{marginTop: 8, color: '#fff', ...style.body5, lineHeight: 16}}>Ao final do dia você terá que marcar quais matérias viu ou deixou de ver. Caso alguma matéria não for vista, nós adiantaremos ela para o próximo dia com espaço.</Text>
          <TouchableOpacity
            style={{marginTop: 8}}
            onPress={() => console.log('Saiba Mais.')}
          >
            <Text style={{textDecorationLine: 'underline', ...style.fonth3, color: '#37E39F'}}>
              Saiba Mais
            </Text>
          </TouchableOpacity>
      </View>
    )
  }

   function renderTransactionHistory() {
     return (
       <TransactionHistory
            customContainerStyle={{...style.shadow}}
            history={transactionHistory}
       />
     )
   }

  return(
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 140}}>
        {renderHeader()}
        {renderAlert()}
        {renderNotice()}
        {renderTransactionHistory()}
      </View>
    </ScrollView>
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
body3: {
  fontFamily: 'Poppins_400Regular',
  fontSize: 16,
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

export default Home;
