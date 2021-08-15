import React, {useState} from 'react'
import { Text, View, Image,TextInput } from 'react-native';

export const NumberElement = ({mystyles,levels,randomnumbers}) => {   


    return (
        <>
        {/* <Text style={mystyles.heading}> {randomnumbers[0]}{randomnumbers[1]}{randomnumbers[0]+randomnumbers[1]}  </Text> */}
        <View style={mystyles.intro}>
        
          {randomnumbers[0].toString().split('').map((s)=> <Text style={mystyles.num}>{s}</Text>  )}
        </View>
        <Text style={mystyles.abs_sign}>+</Text>
        <View style={mystyles.intro}>
          {randomnumbers[1].toString().split('').map((s)=> <Text style={mystyles.num}>{s}</Text>  )}          
        </View>
        {/* <Text  style={mystyles.heading}> {guessdigits.map((a)=>String(a))}</Text> */}  
        </>
    )
}
