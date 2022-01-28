import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { DetailsScreen, HomeScreen } from './src/Screens/Main'
import AppStack from './src/navigation/AppStack'


// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <Stack.Navigator screenOptions={({
        headerStyle: { 
          backgroundColor: '#009387',
          // backgroundColor: '#413839',
        },    
        headerTintColor: '#fff',   
        headerTitleStyle:{
          fontWeight:'bold'
        }   
       
      })}> 
        <Stack.Screen name="Home" component={HomeScreen} options= {{ title:'Overview'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />   
      </Stack.Navigator>     */}
    </NavigationContainer>

  );
};

export default App;
