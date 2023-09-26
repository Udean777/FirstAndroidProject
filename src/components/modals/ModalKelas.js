import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const ModalKelas = ({ title, desc, price, duration, handleHideModal }) => {
  return (
    <View style={styles.modalView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View>
        <Text style={styles.anoText}>Rp {price}</Text>
        <Text style={styles.anoText}>{duration}</Text>
      </View>
      <Button
        title="Buy Now"
        onPress={() => Alert.alert(`Kamu berhasil membeli ${title}`)}
      />
      <Button title="Close Modal" onPress={handleHideModal} />
    </View>
  );
};

export default ModalKelas;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    backgroundColor: "#d7f5ff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  anoText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
