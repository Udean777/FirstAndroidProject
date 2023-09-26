import React, { useState } from "react";
import { Button, Image, Modal, StyleSheet, Text, View } from "react-native";
import ModalKelas from "./modals/ModalKelas";

const CartDetail = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image source={props.ImageSrc} style={{ width: 100, height: 100 }} />
      <Text>{props.desc}</Text>
      <View
        style={{
          width: "auto",
          alignItems: "flex-end",
          marginTop: 10,
          padding: 10,
        }}
      >
        <Button title={props.link} onPress={handleShowModal} />
        <Modal visible={modalVisible} onRequestClose={handleHideModal}>
          <ModalKelas
            title={props.title}
            desc={props.desc}
            price={props.price}
            handleHideModal={handleHideModal}
            duration={props.duration}
          />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#757575",
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CartDetail;
