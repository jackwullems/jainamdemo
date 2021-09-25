import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { SafeAreaView, StatusBar, View } from "react-native"
import { InitScreen, LoginScreen, RootStackParamList, SignupScreen } from "screens"
import { NavigationContainer } from "@react-navigation/native"
import { appColors } from "assets"

const RootStack = createNativeStackNavigator<RootStackParamList>()
const Root = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{headerShown: false}}>
      <RootStack.Screen name='init' component={InitScreen} />
      <RootStack.Screen name='login' component={LoginScreen} />
      <RootStack.Screen name='signup' component={SignupScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}
export default () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: appColors.backGround}}/>
      <SafeAreaView style={{flex: 1, backgroundColor: appColors.backGround}}>
        <StatusBar barStyle='light-content' hidden={false} backgroundColor='transparent'/>
        <NavigationContainer>
          <Root/>
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}