import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.parent}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180}
    >
      <Pressable
        style={[styles.pressable, styles.iconLayout]}
        onPress={() => navigation.navigate("Frame1")}
      >
        <Pressable
          style={styles.img31301}
          onPress={() => navigation.navigate("Frame1")}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/img-3130-1.png")}
          />
        </Pressable>
        <Image
          style={styles.image1Icon}
          resizeMode="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  img31301: {
    left: 0,
    top: 0,
    width: 375,
    height: 812,
    position: "absolute",
  },
  image1Icon: {
    top: 171,
    left: 31,
    borderRadius: 10,
    width: 313,
    height: 195,
    position: "absolute",
  },
  pressable: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    flex: 1,
    backgroundColor: "transparent",
  },
  parent: {
    height: 814,
    width: "100%",
  },
});

export default Frame;
