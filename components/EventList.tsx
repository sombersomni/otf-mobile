import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { ListItem, Text } from '@rneui/themed';
import GameSchedules from './GameSchedules';
import { parseISODateTime } from '../helpers/date_helpers';

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
    item: { name, datetime, status },
    handleNavigation
  }: EventItemProps
) => {
  const { hours, minutes, meridian } = parseISODateTime(datetime)

  return (
    <TouchableOpacity onPress={handleNavigation} key={name}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <ListItem.Title>{name}</ListItem.Title>
              <ListItem.Subtitle>
                Status: {status}
              </ListItem.Subtitle>
            </View>
            <View style={styles.listItemRight}>
              <Text>
                {`${hours}:${minutes} ${meridian}`}
              </Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  )
}

export default function EventList({ handleNavigation }) {
  return (
    <View style={styles.container}>
        {events.map(event => (<EventItem key={event.name} item={event} handleNavigation={handleNavigation} />))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
