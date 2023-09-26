import { Button, SectionList, StyleSheet, Text, View } from "react-native";
import styles from "./styles/styleHome";
import { DATA } from "./data/dataHome";

const Home = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text style={styles.header}>{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
