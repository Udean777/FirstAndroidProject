import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import USER from "../../data/dataUser";
import { Button } from "react-native-paper";

const ModalEditUser = ({ handleHideModal }) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleClose = () => {
    handleHideModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.name);
    setBio(e.target.bio);

    USER.name = name;
    USER.bio = bio;
    handleClose();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit User</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nama"
          style={styles.input}
          value={name}
          onChangeText={setName}
          name="name"
        />
        <TextInput
          placeholder="Bio"
          style={styles.input}
          value={bio}
          onChangeText={setBio}
          name="bio"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 50,
        }}
      >
        <Button onPress={handleClose} mode="elevated" textColor="#00b2ee">
          Cancel
        </Button>
        <Button onPress={handleSubmit} mode="contained" buttonColor="#00b2ee">
          Submit
        </Button>
      </View>
    </View>
  );
};

export default ModalEditUser;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  inputContainer: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#717171",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 20,
    fontSize: 18,
    width: 300,
  },
});
