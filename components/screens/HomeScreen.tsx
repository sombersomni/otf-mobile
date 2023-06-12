import React from 'react';
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native';
import { Text } from '@rneui/themed';
import GameSchedules from '../GameSchedules';
import EventList from '../EventList';
import { DividingHeader, ScreenHeader } from '../common/Headers';
import { parseISODateTime } from '../../helpers/date_helpers';

const photo = 'https://media.cnn.com/api/v1/images/stellar/prod/221006042658-02-nba-lebron-james-las-vegas.jpg'

export default function HomeScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate("EventScreen");
  };

  const currentDatetime = new Date().toISOString()
  const { month, dayOfMonth } = parseISODateTime(currentDatetime)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScreenHeader title="2023-24 Season" subtitle="Upcoming Schedule" />
      <GameSchedules />
      <View style={styles.photoContainer}>
        <ImageBackground source={{ uri: photo }} style={styles.photo} />
      </View>
      <DividingHeader title="Scheduled Post" formattedDay={`${month} ${dayOfMonth}`} />
      <EventList handleNavigation={handleNavigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  photoContainer: {
    width: 'auto',
    height: 320,
  },
  photo: {
    width: '100%',
    height: '100%'  }
});
