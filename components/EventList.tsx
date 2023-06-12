import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon, ListItem, Text } from '@rneui/themed';
import GameSchedules from './GameSchedules';
import { parseISODateTime } from '../helpers/date_helpers';
import { useSpring, animated } from '@react-spring/native';

// Dummy Data
const events = [
  {
    id: 1,
    name: 'Event 1',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
    status: 'completed'
  },
  {
    id: 2,
    name: 'Event 2',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith',
    status: 'failed'
  },
  {
    id: 3,
    name: 'Event 3',
    datetime: '2023-05-21T10:00:00',
    user: 'John Doe',
    status: 'completed'
  },
  {
    id: 4,
    name: 'Event 4',
    datetime: '2023-05-22T14:30:00',
    user: 'Jane Smith',
    status: 'scheduled'
  },
];

const EventInfo = ({expandAnimation}) => {
  return (
    <ListItem>
      <animated.View style={expandAnimation}>
        <Text>Hello</Text>
        {/* Additional information for the expanded event */}
      </animated.View>
    </ListItem>
  )
}

interface EventItem {
  id: number;
  name: string;
  datetime: string;
  status: string;
  user: string;
}

interface EventItemProps {
  item: EventItem,
  selectedEventId: number;
  expandAnimation: any;
  handleNavigation: () => void;
  handlePress: (id: number) => void;
}

const EventItem = (
  {
    item: { id, name, datetime, status },
    expandAnimation,
    selectedEventId,
    handleNavigation,
    handlePress
  }: EventItemProps
) => {
  const { hours, minutes, meridian } = parseISODateTime(datetime)

  return (
    <TouchableOpacity onPress={() => handlePress(id)} key={name}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
              <View>
                <Icon
                  size={16}
                  name='chevron-down'
                  type='font-awesome'
                  solid={false}
                />
              </View>
              <View>
                <ListItem.Title>{name}</ListItem.Title>
                <ListItem.Subtitle>
                  Status: {status}
                </ListItem.Subtitle>
              </View>
            </View>
            <View style={styles.listItemRight}>
              <Text>
                {`${hours}:${minutes} ${meridian}`}
              </Text>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
      {selectedEventId === id && (
        <EventInfo expandAnimation={expandAnimation}/>
      )}
    </TouchableOpacity>
  )
}

export default function EventList({ handleNavigation }) {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const handlePress = (eventId) => {
    setSelectedEventId(selectedEventId === eventId ? null : eventId);
  };

  const expandAnimation = useSpring({
    height: selectedEventId ? 'auto' : 0,
    opacity: selectedEventId ? 1 : 0,
  });
  return (
    <View style={styles.container}>
        {events.map(event => (
          <EventItem
            key={event.name}
            expandAnimation={expandAnimation}
            item={event}
            handleNavigation={handleNavigation}
            handlePress={handlePress}
            selectedEventId={selectedEventId}
          />
        ))}
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
    flexDirection: "row",
  },
  listItemLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    rowGap: 20
  },
  listItemRight: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end"
  }
});
