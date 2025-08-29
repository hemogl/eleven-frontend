import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const EnterButton = ({ destination }: any) => {
  const navigation = useNavigation();

  const goToMap = ({ destination }: any) => {
    navigation.navigate(destination);
  };

  return (
    <View>
      <TouchableOpacity onPress={goToMap}>
        <Image
          style={styles.size}
          source={require("../../theme/next.png")}
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
