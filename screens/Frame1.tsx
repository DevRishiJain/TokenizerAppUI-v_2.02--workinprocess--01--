import * as React from "react";
import { Image, StyleSheet, Pressable, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Frame1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <LinearGradient
      style={styles.img314121Parent}
      locations={[0, 1]}
      colors={["#010411", "#004da6"]}
      useAngle={true}
      angle={180}
    >
      <Pressable
        style={styles.img314121}
        onPress={() => navigation.navigate("Verification1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/img-3141-2-1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  img314121: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 375,
    height: 812,
  },
  img314121Parent: {
    flex: 1,
    backgroundColor: "transparent",
    height: 812,
    width: "100%",
  },
});

export default Frame1;
