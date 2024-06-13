import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Sair
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "left",
  },
});
