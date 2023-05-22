import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventListScreen from './components/screens/EventListScreen';
import PostScreen from './components/screens/PostScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Events">
      <Drawer.Screen
        name="Events"
        component={EventListScreen}
        options={{ drawerLabel: 'Events' }}
      />
      {/* <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      /> */}
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppDrawer />
        <Stack.Navigator initialRouteName="Events">
          <Stack.Group  options={({ navigation }) => ({
            title: 'OTF',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="bars" />
              </TouchableOpacity>
            )
          })}>
            <Stack.Screen name="Events" component={EventListScreen} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: "flex-start"
  }
});
