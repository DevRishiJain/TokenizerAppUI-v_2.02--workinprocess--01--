const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "./screens/SplashScreen";
import Group from "./screens/Group";
import SignInSignUp from "./screens/SignInSignUp";
import SignIn from "./screens/SignIn";
import PhoneNumber from "./screens/PhoneNumber";
import PhoneNumber1 from "./screens/PhoneNumber1";
import ConfirmationCode from "./screens/ConfirmationCode";
import EMail from "./screens/EMail";
import PersonalInformation from "./screens/PersonalInformation";
import Address from "./screens/Address";
import Address1 from "./screens/Address1";
import ProofOfID from "./screens/ProofOfID";
import TermsOfConsent from "./screens/TermsOfConsent";
import Summary from "./screens/Summary";
import Summary1 from "./screens/Summary1";
import Summary2 from "./screens/Summary2";
import Summary3 from "./screens/Summary3";
import Summary4 from "./screens/Summary4";
import Summary5 from "./screens/Summary5";
import Verification from "./screens/Verification";
import Verification1 from "./screens/Verification1";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import EnterYourPhone from "./components/EnterYourPhone";
import TEXTWhite from "./components/TEXTWhite";
import BUTTON1 from "./components/BUTTON1";
import FORMText from "./components/FORMText";
import TEXTWhite50 from "./components/TEXTWhite50";
import TEXTBlue from "./components/TEXTBlue";
import TEXTWhite501 from "./components/TEXTWhite501";
import HEADERLogin from "./components/HEADERLogin";
import WarningMsgwhite from "./components/WarningMsgwhite";
import WarningMsgblue from "./components/WarningMsgblue";
import PhotoInstructions from "./components/PhotoInstructions";
import PhotoInstruction from "./components/PhotoInstruction";
import DSHBRDButton from "./components/DSHBRDButton";
import DSHBRDButtonBank from "./components/DSHBRDButtonBank";
import DSHBRDButtonCrypto from "./components/DSHBRDButtonCrypto";
import DSHBRDButtonCard from "./components/DSHBRDButtonCard";
import NAVIGATION1 from "./components/NAVIGATION1";
import NAVb from "./components/NAVb";
import NAVb1 from "./components/NAVb1";
import NAVb2 from "./components/NAVb2";
import NavSecondary from "./components/NavSecondary";
import BrandingBannerImage from "./components/BrandingBannerImage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignInSignUp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Group"
              component={Group}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInSignUp"
              component={SignInSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneNumber"
              component={PhoneNumber}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneNumber1"
              component={PhoneNumber1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmationCode"
              component={ConfirmationCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EMail"
              component={EMail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalInformation"
              component={PersonalInformation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Address"
              component={Address}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Address1"
              component={Address1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProofOfID"
              component={ProofOfID}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TermsOfConsent"
              component={TermsOfConsent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary"
              component={Summary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary1"
              component={Summary1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary2"
              component={Summary2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary3"
              component={Summary3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary4"
              component={Summary4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Summary5"
              component={Summary5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification1"
              component={Verification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
