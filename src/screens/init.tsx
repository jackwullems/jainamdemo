import { appColors, images } from "assets"
import React from "react"
import { View } from "react-native"
import { Button, colors, Image } from "react-native-elements"
import Swiper from 'react-native-swiper'
import { InitScreenProps } from "screens"

export const InitScreen = ({navigation}: InitScreenProps) => {
    return (
        <View style={{flex: 1, backgroundColor: appColors.backGround}}>
            <Swiper
                activeDotColor={colors.white}
                dotColor={colors.grey0}
                containerStyle={{alignSelf: 'center', justifyContent: 'center'}}
            >
            {
                images.initSwiper.map((image, index)=>
                <View key={index} style={{    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Image source={image} resizeMode='cover' style={{width: 320, height: 200}}/>
                </View>
                )
            }               
            </Swiper>
            <View style={{marginHorizontal: 32}}>
                <Button
                    type='outline'
                    titleStyle={{color: 'white'}}
                    containerStyle={{marginTop: 32}}
                    buttonStyle={{alignItems: 'center', borderColor: appColors.blue, borderRadius: 32, borderWidth: 1}}
                    title="Sign Up, It's Free"
                    onPress={()=>navigation.push('signup')}
                />
                <Button
                    type='outline'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: 'white'}}
                    buttonStyle={{alignItems: 'center', borderColor: appColors.blue, borderRadius: 32, borderWidth: 1}}
                    title="Login"
                    onPress={()=>navigation.push('login')}
                />
                <Button
                    type='solid'
                    containerStyle={{marginTop: 16}}
                    titleStyle={{color: 'white'}}
                    buttonStyle={{alignItems: 'center', backgroundColor: appColors.blue, borderRadius: 32, borderWidth: 1}}
                    title="Join Event"
                />
                <Button
                    type='clear'
                    containerStyle={{marginTop: 64}}
                    titleStyle={{color: appColors.secondBlue}}
                    title="Join Demo Meeting"
                />
            </View>
        </View>
    )
}