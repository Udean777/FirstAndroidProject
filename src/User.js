import React, { useState } from "react";
import { Button, Modal, ScrollView } from "react-native";
import { Image, Text, View } from "react-native";
import styles from "./styles/styleUser";
import USER from "./data/dataUser";
import ModalEditUser from "./components/modals/ModalEditUser";

const User = ({ navigation }) => {
  const point = Math.floor(Math.random() * 100);
  const [isModal, setIsModal] = useState(false);

  const handleShowModal = () => {
    setIsModal(true);
  };

  const handleHideModal = () => {
    setIsModal(false);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={USER.img} style={styles.img} />
        <Text style={styles.name}>{USER.name}</Text>
        <Text style={styles.bio}>{USER.bio}</Text>
        <Text style={styles.coin}>Total Coin : {point}</Text>
      </View>

      <View
        style={{
          flex: 1,
          gap: 10,
          marginHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Button title="Edit User" color={"#123fff"} onPress={handleShowModal} />
        <Button
          title="Cart"
          color={"#123fff"}
          onPress={() => navigation.navigate("Cart")}
        />
      </View>

      <Modal visible={isModal} onRequestClose={handleHideModal}>
        <ModalEditUser handleHideModal={handleHideModal} />
      </Modal>
    </ScrollView>
  );
};

export default User;
