import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import BACKGROUNDoptionIcon from "../components/BACKGROUNDoptionIcon";
import TEXTWhite501 from "../components/TEXTWhite501";
import HEADERLogin from "../components/HEADERLogin";
import FORMText from "../components/FORMText";
import INPUThalfSize1 from "../components/INPUThalfSize1";
import { Border } from "../GlobalStyles";

const PhoneNumber = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.phoneNumber}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180.02}
    >
      <BACKGROUNDoptionIcon
        imageDimensions={require("../assets/backgroundoption1.png")}
      />
      <TEXTWhite501
        tEXTWhite5016Position="absolute"
        tEXTWhite5016Top={129}
        tEXTWhite5016Left={-2}
      />
      <HEADERLogin
        enterYourPhone="What's your phone number?"
        hEADERLoginPosition="absolute"
        hEADERLoginTop={74}
        hEADERLoginLeft={0}
        enterYourPhoneLetterSpacing={0.2}
        enterYourPhoneLineHeight={24}
        enterYourPhoneFontWeight="600"
        enterYourPhoneFontFamily="Montserrat-SemiBold"
      />
      <FORMText
        fORMTextPosition="absolute"
        fORMTextBorderColor="#0a7cff"
        fORMTextTop={333}
        fORMTextLeft={136}
        fORMTextWidth={225}
        onFORMTextPress={() => navigation.navigate("PhoneNumber1")}
      />
      <INPUThalfSize1 />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  phoneNumber: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default PhoneNumber;
