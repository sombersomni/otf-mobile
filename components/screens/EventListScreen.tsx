import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import { Chip, ListItem } from '@rneui/themed';

// Dummy Data
const events = [
  {
    name: 'Event 1',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
    status: 'completed'
  },
  {
    name: 'Event 2',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith',
    status: 'failed'
  },
  {
    name: 'Event 3',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
    status: 'completed'
  },
  {
    name: 'Event 4',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith',
    status: 'scheduled'
  },
];

interface EventItem {
  name: string;
  datetime: string;
  status: string;
  user: string;
}
interface EventItemProps {
  item: EventItem,
  handleNavigation: () => void;
}

const EventItem = (
  {
    item: { name, datetime, status, user },
    handleNavigation
  }: EventItemProps
) => (
  <TouchableOpacity onPress={handleNavigation}>
    <ListItem bottomDivider>
      <ListItem.Content>
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <ListItem.Title>{name}</ListItem.Title>
            <ListItem.Subtitle>
              {new Date(Date.parse(datetime)).toDateString()}
            </ListItem.Subtitle>
          </View>
          <View style={styles.listItemRight}>
            <Chip
              title={status}
              type="outline"
              size="sm"
              containerStyle={{ marginVertical: 15 }}
            />
          </View>
        </View>
      </ListItem.Content>
    </ListItem>
  </TouchableOpacity>
);

export default function EventListScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate("EventScreen");
  };
  return (
    <View style={styles.container}>
      <FlatList
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
  listItem: {
    flex: 1,
    flexDirection: "row"
  },
  listItemLeft: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  listItemRight: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end"
  }
});
