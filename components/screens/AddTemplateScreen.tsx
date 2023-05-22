import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native"
import { Text, ListItem } from "@rneui/themed"

const options = [
  { id: 1, name: "Starting Five" },
  { id: 2, name: "Game Score Per Period" },
  { id: 3, name: "Most Valuable Player" }
];
export default function AddTemplateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h3>Select an Event Type</Text>
        <Text>This event will attach itself to a template. Only one template can be used per event</Text>
      </View>
      <View style={styles.options}>
        <FlatList
          data={options}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {}}>
              <ListItem>
                <Text>{item.name}</Text>
              </ListItem>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  options: {
    flex: 2,
    flexDirection: "column"
  }
})