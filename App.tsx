import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EventListScreen from './components/screens/EventListScreen.tsx';
import PostScreen from './components/screens/PostScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function HomeScreen() {
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
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group options={({ navigation }: any) => ({
            title: 'OTF',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="bars" />
              </TouchableOpacity>
            )
          })}>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
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
