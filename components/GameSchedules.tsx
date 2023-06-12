import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Image, ListItem, Text } from 'react-native-ui-lib';
import { parseISODateTime } from '../helpers/date_helpers';

// Dummy Data
const schedules = [
  {
    id: 1,
    team: 'Atlanta Hawks',
    logo: 'https://w7.pngwing.com/pngs/367/826/png-transparent-pac-man-philips-arena-atlanta-hawks-indiana-pacers-orlando-magic-atlanta-falcons-text-trademark-logo-thumbnail.png',
    datetime: '2023-05-21T10:00:00',
  },
  {
    id: 2,
    team: 'Atlanta Hawks',
    logo: 'https://w7.pngwing.com/pngs/367/826/png-transparent-pac-man-philips-arena-atlanta-hawks-indiana-pacers-orlando-magic-atlanta-falcons-text-trademark-logo-thumbnail.png',
    datetime: '2023-05-21T10:00:00',
  },
  {
    id: 3,
    team: 'Atlanta Hawks',
    logo: 'https://w7.pngwing.com/pngs/367/826/png-transparent-pac-man-philips-arena-atlanta-hawks-indiana-pacers-orlando-magic-atlanta-falcons-text-trademark-logo-thumbnail.png',
    datetime: '2023-05-21T10:00:00',
  },
  {
    id: 4,
    team: 'Atlanta Hawks',
    logo: 'https://w7.pngwing.com/pngs/367/826/png-transparent-pac-man-philips-arena-atlanta-hawks-indiana-pacers-orlando-magic-atlanta-falcons-text-trademark-logo-thumbnail.png',
    datetime: '2023-05-21T10:00:00',
  },
  {
    id: 5,
    team: 'Atlanta Hawks',
    logo: 'https://w7.pngwing.com/pngs/367/826/png-transparent-pac-man-philips-arena-atlanta-hawks-indiana-pacers-orlando-magic-atlanta-falcons-text-trademark-logo-thumbnail.png',
    datetime: '2023-05-21T10:00:00',
  },
];

interface ScheduleItem {
  logo: string;
  datetime: string;
}

interface ScheduleItemProps {
  item: ScheduleItem
}

const ScheduleItem = ({ item }: ScheduleItemProps) => {
  const { datetime, logo } = item
  const { day, month, dayOfMonth } = parseISODateTime(datetime)
  return (
    <ListItem style={styles.scheduleContainer}>
      <Image source={{ uri: logo }} width={32} height={32}/>
      <View>
        <Text white>{ day }.</Text>
      </View>
      <View>
        <Text white>{ `${month} ${dayOfMonth}`}</Text>
      </View>
    </ListItem>
  )
}

export default function GameSchedules() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {schedules.map(schedule => (
          <ScheduleItem key={`schedule-item-${schedule.id}`} item={schedule}/>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#000000',
    justifyContent: "flex-start"
  },
  scheduleContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  photo: {
    width: 38,
    height: 38,
    resizeMode: 'center',
    marginBottom: 2,
  }
});
