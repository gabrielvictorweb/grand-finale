import React from "react";
import { StyleSheet } from "react-native";
import RNModal from "react-native-modal";
import { Text, View } from "./Themed";
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}
    >
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View darkColor="#111" style={styles.container}>
    {children}
  </View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View darkColor="#111" style={styles.header}>
    <Text darkColor="#FFF" style={styles.text}>
      {title}
    </Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View darkColor="#111" style={styles.body}>
    {children}
  </View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View darkColor="#111" style={styles.footer}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    padding: 20,
  },
  header: {},
  text: {
    paddingTop: 10,
    fontSize: 24,
  },
  body: {
    justifyContent: "center",
    minHeight: 100,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
