import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
// import { ListItem, Text } from '@rneui/themed';

const events = [
  {
    name: 'Event 1',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
  },
  {
    name: 'Event 2',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith',
  },
  // Add more events as needed
];

// const renderItem = ({ item }) => (
//   <ListItem bottomDivider>
//     <ListItem.Content>
//       <ListItem.Title>{item.name}</ListItem.Title>
//       <ListItem.Subtitle>
//         {item.datetime}
//       </ListItem.Subtitle>
//       <ListItem.Subtitle>{item.user}</ListItem.Subtitle>
//     </ListItem.Content>
//   </ListItem>
// );

export default function App() {
  return (
    <View style={styles.container}>
      <Text h3>List of Events</Text>
      <FlatList
        data={events}
        renderItem={() => null}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  }
});
