import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { appFonts, colors, size } from "../../utilities";

export const OrBar = () => {
  return (
    <View style={styles.line1Container}>
      <View style={styles.line1Style} />
      <View>
        <Text style={styles.linetext}>Or</Text>
      </View>
      <View style={styles.line2Style} />
    </View>
  );
};

const styles = StyleSheet.create({
  line1Style: {
    flex: 1,
    height: 2,
    backgroundColor: colors.g7,
  },
  line2Style: {
    flex: 1,
    height: 2,
    backgroundColor: colors.g7,
  },
  line1Container: {
    flexDirection: "row",
    alignItems: "center",
  },
  linetext: {
    width: 100,
    textAlign: "center",
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: appFonts.AvanttMedium,
  },
});
