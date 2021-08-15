import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { MathApp} from './maths/components/MathApp';

// import { MyStack } from './maths/components/MyStack';
const Stack = createStackNavigator();
const HomeScreen = ({ navigation }) => {
    return (
      <>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      /> */}
      <Button title="Level 1" onPress={() => navigation.navigate('MathScreen', { level: 1 })  }  />
      <Button title="Level 2" onPress={() => navigation.navigate('MathScreen', { level: 2 })  }  />
      <Button title="Level 3" onPress={() => navigation.navigate('MathScreen', { level: 3 })  }  />
      <Button title="Level 4" onPress={() => navigation.navigate('MathScreen', { level: 4 })  }  />
      </>
    );
  };
  const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
  const MathScreen = ({ navigation, route }) => {
    return <MathApp level={route.params.level}/>
    // return <Text>This is {route.params.name}'s profile</Text>;
  };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="MathScreen" component={MathScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;