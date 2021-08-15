// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import React, { useState }  from 'react'
// import CatApp from './maths/components/CatApp';
import { NumberElement } from './NumberElement';
import { Result } from './Result';
import { styles } from './Styles';
import { getRandomInt, getRandomNumbers } from './MathFunctions';
// import {Checkmark} from 'react-checkmark'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AwesomeButton from 'react-native-really-awesome-button';
// import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { FAB } from 'react-native-paper';
import { Button,StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground } from 'react-native';

const levels=[{'level':0,'ndigits':1},{'level':1,'ndigits':2},{'level':2,'ndigits':2},
{'level':3,'ndigits':2},{'level':4,'ndigits':3} ]


export const  MathApp=() =>{  
  // function refreshPage() {
  //   window.location.reload();
  // }

  let level=levels[1]['level']
  let randomnumbers=getRandomNumbers(level)
  // const reducer = (accumulator, curr) => accumulator + curr;
  // console.log(randomnumbers.reduce(reducer));
  let resultnumber=randomnumbers[0]+randomnumbers[1]
  // console.log(randomnumbers[0],randomnumbers[1],randomnumbers[0]+randomnumbers[1]);
  return (
    // <View>
    //   <Text style={styles.heading}> Additions  </Text>
    // </View>
    <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }} >
      <View style={styles.container}>
        <View >  
              <Text style={{ color: "#4b945f", justifyContent: "center",fontSize: 30,
            alignSelf: "center", }} > Vedansh Nalamara  </Text>
        </View> 

        <Text style={styles.heading}> Additions  </Text>
        <View style={styles.line}/>
          <View style={styles.mathcontainer}>
             <ImageBackground imageStyle={{ borderRadius: 15}}
              source={require("../assets/dark-black-vector-background.jpg")} 
              resizeMode="cover" 
              style={{ width: "100%", height: "100%" }} >
              <NumberElement mystyles={styles} randomnumbers={randomnumbers}/>
              <View style={styles.line50}/>
              <Result  mystyles={styles} levels={levels} resultnumber={resultnumber}/>         
              
            </ImageBackground>             
          </View> 
        </View> 
        

        {/* <FAB
          style={styles.fab}
          medium
          icon="plus"
          label='Next'
          onPress={refreshPage}
        />  */}
    </ImageBackground> 
    
  );
}
