import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

const EnterButton = ({ destination, navigation }: any) => {
  const goToMap = () => {
    navigation.navigate(destination);
  };

  return (
    <View>
      <TouchableOpacity onPress={goToMap}>
        <Image
          style={styles.size}
          source={require("../theme/next.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  size: {
    width: 30,
    height: 30,
  },
});

export default EnterButton;
