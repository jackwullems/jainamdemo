import { appColors, images } from "assets"
import React from "react"
import { Text, View } from "react-native"
import { Input, Button, Icon, Image } from "react-native-elements"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PhoneInput from "react-native-phone-number-input"

const Tab = createMaterialTopTabNavigator()

export const LoginScreen = () => {
    const MobileTab = () => {
        return (
            <View
                style={{backgroundColor: appColors.backGround, flex: 1}}>
                <PhoneInput
                    placeholder='Mobile Number'
                    containerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        marginStart: 10,
                        // marginEnd: 16,
                        height: 50,
                        backgroundColor: 'transparent'}}
                    textContainerStyle={{backgroundColor: 'transparent'}}
                    codeTextStyle={{color: appColors.deactiveText}}
                    textInputProps={{placeholderTextColor: appColors.deactiveText}}
                    renderDropdownImage={<Icon name='caretdown' type='antdesign' size={10} color={appColors.deactiveText} />}
                    textInputStyle={{color: appColors.deactiveText, backgroundColor: 'transparent'}}
                    defaultCode='US'/>
                <Input
                    secureTextEntry
                    containerStyle={{height: 50}}
                    placeholderTextColor={appColors.deactiveText}
                    inputContainerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1
                    }}
                    rightIcon={<Icon name='eye' type='feather' color={appColors.deactiveText}/>}
                    placeholder='Password'/>
            </View>
        )
    }
    const EmailTab = () => {
        return (
            <View
                style={{backgroundColor: appColors.backGround, flex: 1}}>
                <Input
                    containerStyle={{height: 50}}
                    placeholder='Email Address'
                    placeholderTextColor={appColors.deactiveText}
                    inputContainerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1
                    }}/>
                <Input
                    secureTextEntry
                    containerStyle={{height: 50}}
                    placeholderTextColor={appColors.deactiveText}
                    inputContainerStyle={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1
                    }}
                    rightIcon={<Icon name='eye' type='feather' color={appColors.deactiveText}/>}
                    placeholder='Password'/>
            </View>
        )
    }
    return (
        <View style={{flex: 1, backgroundColor: appColors.backGround}}>
            <View style={{margin: 16, alignItems: 'center'}}>
                <Image source={images.logo} style={{marginTop: 16, width: 100, height: 80}}/>
                <Text style={{marginTop: 16, color: appColors.activeText, fontSize: 18}}>Login into your account</Text>
            </View>
            <View style={{marginHorizontal: 16, height: 150, backgroundColor: appColors.backGround}}>
                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: {
                            backgroundColor: appColors.blue
                        },
                        tabBarLabelStyle: {
                            color: appColors.deactiveText,
                        },
                        tabBarStyle: { backgroundColor: appColors.backGround }}}>
                    <Tab.Screen name="Email" component={EmailTab} />
                    <Tab.Screen name="Mobile" component={MobileTab} />
                </Tab.Navigator>
            </View>
            <View style={{margin: 16}}>
                <Button
                    type='clear'
                    titleStyle={{color: appColors.secondBlue}}
                    title='Forgot password?'/>
                <Button
                    type='outline'
                    title='Login'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: appColors.activeText}}
                    buttonStyle={{backgroundColor: appColors.blue, borderRadius: 32}}
                />
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: appColors.activeText}}>Don't have an account?</Text>
                    <Button
                        type='clear'
                        titleStyle={{color: appColors.secondBlue}}
                        title="Sign Up"/>
                </View>
                <Button
                    type='outline'
                    title='Join Event'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: appColors.activeText}}
                    buttonStyle={{backgroundColor: appColors.blue, borderRadius: 32}}
                />
                <Button
                    type='clear'
                    titleStyle={{color: appColors.secondBlue}}
                    title='Join Demo Meeting'/>
            </View>
        </View>
    )
}