import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import React, { useState }  from 'react'
import { Button,StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground } from 'react-native';

const initialState=true;


const handleCalculate = (mass,height,setresultText,setResultNumber) => {
  
  let imc = (mass * 703) / height ** 2;
  setResultNumber(imc.toFixed(2))

  if (imc < 18.5) {
    setresultText("Underweight")
    
  } else if (imc > 18.5 && imc < 25) {
    setresultText("Normal Weight")
  } else if (imc >= 25 && imc < 30) {
    setresultText("Overweight")
  } else {
    setresultText("Obesity")
  }
};

export default function BmiApp() {
  
  const [mass, setMass] = useState(25)
const [height, setHeight] = useState(150)
const [resultNumber, setResultNumber] = useState(0)
const [resultText, setresultText]=useState('Look for this')
  // let imc_val=imc(mass,height);

// Within your render function
// onChangeText={text=>setText(text)}

  const state = {
    value: null,
    displayValue: "0",
    colorView: true,
    waitingForOperand: false,
    operator: null,
    bts: " "
  };
  return (
    // <View style={styles.container}>
      <ImageBackground
        source={require("./bmi/assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text
            style={{
              color: "#FFCB1F",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              fontSize: 15
            }}
          >
            BMI Calculator
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="Height"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={height=>setHeight(height)}
            />
            <TextInput
              placeholder="Mass"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={mass=>setMass(mass)}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={()=>handleCalculate(mass,height,setresultText,setResultNumber)}
          >
            <Text style={styles.buttonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.result}>{resultNumber}</Text>
          <Text style={[styles.result, { fontSize: 35 }]}>
            {resultText}
          </Text>
    
    {/* <Button
            onPress={()=>handleCalculate(mass,height,setresultText,setResultNumber)}

            title={'Calculate'}
        />
      <Text> BMI is {resultNumber}</Text>
      <Text> Result: {resultText} </Text> */}
      
    </View> 
    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "#FFCB1F"
  },
  button: {
    backgroundColor: "#1D1D1B"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 65,
    padding: 15
  }
});

