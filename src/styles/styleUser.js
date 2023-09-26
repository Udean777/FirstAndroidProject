import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bio: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  coin: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default styles;
