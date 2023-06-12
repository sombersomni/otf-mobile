import React from 'react';
import { StyleSheet, ScrollView, View, ImageBackground } from 'react-native';
import { Text } from '@rneui/themed';
import GameSchedules from '../GameSchedules';
import EventList from '../EventList';

const photo = 'https://media.cnn.com/api/v1/images/stellar/prod/221006042658-02-nba-lebron-james-las-vegas.jpg'

export default function HomeScreen({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate("EventScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text h4>
          Upcoming Games
        </Text>
      </View>
      <GameSchedules />
      <View style={styles.photoContainer}>
        <ImageBackground source={{ uri: photo }} style={styles.photo} />
      </View>
      <View>
        <Text h4>
          Scheduled Posts
        </Text>
      </View>
      <EventList handleNavigation={handleNavigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  photoContainer: {
    width: 320,
    height: 320,
  },
  photo: {
    width: '100%',
    height: '100%'  }
});
