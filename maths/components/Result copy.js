import React, {useState,useEffect} from 'react'
import { Text, View, Image,TextInput } from 'react-native';
// import {Checkmark} from 'react-checkmark'
// import Check from '../assets/iconmonstr-check-mark-7.svg';
// import Circle from './Circle';
import Svg, { Circle, Rect } from 'react-native-svg';
import { Icon } from 'react-native-eva-icons';


const CloseIcon=()=>{
    
<Icon name='close-circle-outline' fill='red'/>
}
const ModCloseIcon=(condval)=> {
    if(condval!==999){
        return null}
    else{
        return <CloseIcon width={50} height={50} />
      } 
  }
// import { CheckIcon } from './CheckIcon';
// import { CheckBox } from 'react-native-elements'

// import React, { Component } from 'react';
// import {CrossMarker} from 'react-native-animated-check-mark';
// class Result  extends Component 
export const Result = ({mystyles,levels,resultnumber,resinput}) => {
    const CheckIcon = () => (<Icon name='checkmark-circle-2-outline' fill='green'/>);

    let ndigits=levels[1]['ndigits']
    // useEffect(()=>{<MathApp />},[resultnumber])
    // console.log(ndigits)
    // const [guessdigits, setguessdigits] = useState(new Array(ndigits).fill(0))//new Array(3).fill(1)
    // const [isRightGuesses, setisRightGuesses] = useState(new Array(ndigits).fill(false))//new Array(3).fill(1)
    // let guessdigits
    let resdigits=resultnumber.toString().split('').map(Number)
    console.log(resdigits)
    // const clearDigit = (k)=>{
    //     let mydigits = [...guessdigits]; // copying the old datas array
        
    //     // newArr[index] = e.target.value;
    //     // console.log('digit',digit==null)
    //     mydigits[k]=null

        
    //     setguessdigits(mydigits)

    // }
    const addDigit= (digit,k)=>{
        // guessdigits=new Array(3).fill(1)
        // guessdigits[k]=digit
        // var mydigits=guessdigits.slice(0,guessdigits.length-1)
        let mydigits = [...resinput.guessdigits]; // copying the old datas array
        
        // newArr[index] = e.target.value;
        // console.log('digit',digit===null,k)

        mydigits[k]=digit*1%10

        
        

        let istureGuesses = [...resinput.isRightGuesses];
        
        istureGuesses[k]=checkifRightGuess(mydigits[k],resdigits[k])
        // let myVar = setTimeout(()=>{ 
        //     if (istureGuesses[k]) {
        //         setguessdigits(mydigits)
        //         setisRightGuesses(istureGuesses)
        //     }else{
        //         mydigits[k]=0
        //         setisRightGuesses(istureGuesses)
        //     }

        // }, 500)

        
        // console.log({'isRightGuesses':istureGuesses,'res':resultnumber,'resdigits':resdigits,'mydigits':mydigits})
        // setguessdigits([...mydigits])
    }
    const checkifRightGuess= (guess,result)=>guess==result;
    return (
        <>

        <View style={mystyles.intro}> 

            {Array.apply(0, Array(ndigits).fill(0)).map(function(_,b) { return b ; })
            .map((k)=>
              <TextInput
                pattern="[+-]?\d+(?:[.,]\d+)?"
                keyboardType="numeric"
                style={mystyles.input}
                key={String(k)}
                onChangeText= {(digit)=>addDigit(digit,k)}
                // value={guessdigits[k].toString()}
                editable={!resinput.guessdigits[k]} 
              />)}
            
    </View>
    <View style={mystyles.line50}/>
    <View style={mystyles.intro}>
     {Array.apply(0, Array(ndigits).fill(0)).map(function(_,b) { return b ; })
                .map((k)=>
                <View style={mystyles.num} key={String(k)}> 
                    {resinput.isRightGuesses[k]?  <CheckIcon width={50} height={50} />: null
                    }
                </View>)} 
                
    </View>
    {/* <View style={mystyles.line50}/> */}
    {/* <CheckIcon  width={25} height={25}  /> */}
    {/* <View style={mystyles.abs_mark}> */}
    
            {/* {isRightGuesses.every(v => v === true)? <CheckIcon  width={100} height={100}  />  : null} */}
            {/* </View> */}
    </>
    )
    return (
        <>
            
            {/* <View style={mystyles.intro}> */}

            {
            // Array.apply(0, Array(ndigits)).map(function(_,b) { return b ; })
            // .map((k)=>
            //   <TextInput
            //     // placeholder={k}
            //     pattern="[+-]?\d+(?:[.,]\d+)?"
            //     keyboardType="numeric"
            //     style={mystyles.input}
            //     key={k}
            //     // onKeyPress={({ nativeEvent,digit,k }) => {
            //     //     nativeEvent.key === 'Backspace' ? clearDigit(k) : addDigit(nativeEvent.key,k)
            //     //   }}
            //     onChangeText= {(digit)=>addDigit(digit,k)        }
            //     value={guessdigits[k]}
            //     editable={!guessdigits[k]} 
            //   />)
              }
              {/* <TextInput
                placeholder="?"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={mass=>setMass(mass)}
              /> */}
            {/* </View> */}

            

            {/* <View style={mystyles.intro}>
                {Array.apply(0, Array(ndigits)).map(function(_,b) { return b ; })
                .map((k)=>
                <Text style={mystyles.num}>
                                            {isRightGuesses[k]? <Checkmark  size='50px' color ='green' />  : null}
                </Text>)}
            </View> */}

            {/* <View style={mystyles.abs_mark}>
            {isRightGuesses.every(v => v === true)? <CheckBox  size='100px' color ='green' />  : null}
            </View>
             */}
        </>
    )
}
