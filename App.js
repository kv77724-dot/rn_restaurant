/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
// import React from 'react';
// import {createAppContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// function App() {
//   const navigator = createStackNavigator();
//   return (
//     <createAppContainer>
//       <navigator.Navigator>
//         <navigator.Screen name="Search" component={SearchScreen} />
//       </navigator.Navigator>
//     </createAppContainer>
//   );
// }

// export default createAppContainer(navigator);

// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Results" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
