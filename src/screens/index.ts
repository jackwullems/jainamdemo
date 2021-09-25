import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    init: undefined
    login: undefined
    signup: undefined
}
  
export type InitScreenProps = NativeStackScreenProps<RootStackParamList, 'init'>
export type SignupScreenProps = NativeStackScreenProps<RootStackParamList, 'signup'>

export * from './init'
export * from './login'
export * from './signup'