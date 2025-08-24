import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import colors from "../../theme/colors";

const SettingsButton = ({ destination, navigation }: any) => {
  const goToSettings = () => {
    navigation.navigate(destination);
  };

  return (
    <View style={styles.settingButton}>
      <TouchableOpacity onPress={goToSettings}>
        <Image
          style={styles.size}
          source={require("../../theme/settings.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingButton: {
    width: 30,
    height: 30,
    backgroundColor: colors.white,
  },
  size: {
    width: 30,
    height: 30,
  },
});

export default SettingsButton;
