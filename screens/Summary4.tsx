import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import TEXTWhite50 from "../components/TEXTWhite50";
import { Border } from "../GlobalStyles";

const Summary4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.summary}>
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption.png")}
      />
      <Pressable
        style={styles.lock}
        onPress={() => navigation.navigate("Summary5")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/lock.png")}
        />
      </Pressable>
      <TEXTWhite50
        enterYourPhone={`Your account is now being 
secured with 128-bit encryption`}
        showEnterYourPhone
        tEXTWhite5011Position="absolute"
        tEXTWhite5011Top={497}
        tEXTWhite5011Left={9}
        enterYourPhoneLetterSpacing={-0.2}
        enterYourPhoneFontFamily="Montserrat-Regular"
        enterYourPhoneColor="#fff"
        enterYourPhoneFontSize={16}
        enterYourPhoneLineHeight={22}
        enterYourPhoneTextAlign="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  lock: {
    position: "absolute",
    left: 120,
    top: 247,
    width: 136,
    height: 199,
  },
  summary: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Summary4;
