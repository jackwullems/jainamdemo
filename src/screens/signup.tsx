import { appColors } from "assets"
import React from "react"
import { Text, View, Pressable } from "react-native"
import { Button, Icon } from "react-native-elements"
import { Input } from "react-native-elements/dist/input/Input"
import PhoneInput from "react-native-phone-number-input"
import { SignupScreenProps } from "screens"

export const SignupScreen = ({navigation}: SignupScreenProps) => {
    return (
        <View style={{flex: 1, backgroundColor: appColors.backGround}}>
            <View style={{marginVertical: 32, marginHorizontal: 16, alignItems: 'center'}}>
            <Text style={{color: appColors.activeText, fontSize: 18}}>Sign Up</Text>
            <Input
                containerStyle={{height: 50, marginTop: 32}}
                placeholder='Email Address'
                placeholderTextColor={appColors.deactiveText}
                inputContainerStyle={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1
                }}/>
            <PhoneInput
                placeholder='Mobile Number'
                containerStyle={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    width: '95%',
                    marginStart: 16,
                    marginEnd: 16,
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
            <View style={{margin: 16, flex: 1}}>
                <Button
                    type='outline'
                    title='Continue'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: appColors.activeText}}
                    buttonStyle={{backgroundColor: appColors.blue, borderRadius: 32}}
                />
                <Text style={{color: appColors.activeText, fontSize: 15, marginTop: 16}}>By clicking Continue, you acknowledge you have read and agreed to our <Text style={{color: appColors.secondBlue}}>Term & Conditions</Text> and <Text style={{color: appColors.secondBlue}}>Privacy Policy</Text></Text>
                <View style={{marginTop: 64, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: appColors.activeText, fontSize: 15}}>Already have an account?</Text>
                    <Pressable style={{alignItems: 'center', marginStart: 16}} onPress={()=>navigation.replace('login')}><Text style={{color: appColors.secondBlue}}>Login</Text></Pressable>
                </View>
                <Button
                    type='outline'
                    title='Join Event'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: appColors.activeText}}
                    buttonStyle={{backgroundColor: appColors.blue, borderRadius: 32}}
                />
                <View style={{flex: 1}}/>
                <Button
                    type='clear'
                    titleStyle={{color: appColors.secondBlue}}
                    title='Join Demo Meeting'/>
            </View>
        </View>
    )
}