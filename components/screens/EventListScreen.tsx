import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import { ListItem } from '@rneui/themed';

// Dummy Data
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
  {
    name: 'Event 3',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
  },
  {
    name: 'Event 4',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith'
  },
];

interface EventItem {
  name: string;
  datetime: string;
  user: string;
}
interface EventItemProps {
  item: EventItem,
  handleNavigation: () => void;
}

const EventItem = (
  {
    item: { name, user, datetime },
    handleNavigation
  }: EventItemProps
) => (
  <TouchableOpacity onPress={handleNavigation}>
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>
          {new Date(Date.parse(datetime)).toDateString()}
        </ListItem.Subtitle>
        <ListItem.Subtitle>{user}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  </TouchableOpacity>
);

export default function EventListScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate("PostScreen");
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={events}
        renderItem={({item}) => <EventItem item={item} handleNavigation={handleNavigation} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: "flex-start"
  },
  list: {

  }
});
