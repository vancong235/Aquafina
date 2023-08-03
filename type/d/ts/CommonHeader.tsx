import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CommonStackNavigatorParamList = {
  Home: undefined;
  Loading: undefined;
  Qrcode: undefined;
  Start: undefined;
  Turtorial: undefined;
  
};
export type HomeScreenNavigationProp = NativeStackScreenProps<
  CommonStackNavigatorParamList,
  'Home'
>;
export type LoadingScreenNavigationProp = NativeStackScreenProps<
  CommonStackNavigatorParamList,
  'Loading'
>;
export type QrcodeScreenNavigationProp = NativeStackScreenProps<
  CommonStackNavigatorParamList,
  'Qrcode'
>;
export type StartScreenNavigationProp = NativeStackScreenProps<
  CommonStackNavigatorParamList,
  'Start'
>;
export type TurtorialScreenNavigationProp = NativeStackScreenProps<
  CommonStackNavigatorParamList,
  'Turtorial'
>;