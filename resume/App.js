import * as React from 'react';
import ResumeForm from './screens/ResumeForm';
import ShowCV from './screens/ShowCV';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
//The stack allows you to 'stack up' the screens you want to transition between in your app

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Resume'
          component={ResumeForm}
        />

        <Stack.Screen
          name='ShowCV'
          component={ShowCV}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004987',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/