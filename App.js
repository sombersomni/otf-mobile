import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import { ListItem, Text } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainHeader from './components/Header';
import EventListScreen from './components/screens/EventListScreen';

export function PostScreen() {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.main}>
      {/* <MainHeader title={"OTF"} /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="EventListScreen" component={EventListScreen} />
          <Stack.Screen name="PostScreen" component={PostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: "flex-start"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: "flex-start"
  },
});
