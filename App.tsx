import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';

import EventListScreen from './components/screens/EventListScreen';
import EventScreen from './components/screens/EventScreen';
import TemplateListScreen from './components/screens/TemplateListScreen';
import TemplateScreen from './components/screens/TemplateScreen';
import AddTemplateScreen from './components/screens/AddTemplateScreen';
import TemplateSettingsComponent from './components/screens/TemplateSettingsScreen';

const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <Drawer.Navigator initialRouteName="Events">
      <Drawer.Screen
        name="EventListScreen"
        component={EventListScreen}
        options={{ drawerLabel: 'Events', headerTitle: 'Events' }}
      />
      <Drawer.Screen
        name="TemplateListScreen"
        component={TemplateListScreen}
        options={{ drawerLabel: 'Templates', headerTitle: 'Templates' }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group options={({ navigation }) => ({
            title: 'OTF',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="bars" />
              </TouchableOpacity>
            )
          })}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="EventScreen" component={EventScreen} />
            <Stack.Screen name="TemplateScreen" component={TemplateScreen} />
            <Stack.Screen name="AddTemplateScreen" component={AddTemplateScreen} />
            <Stack.Screen name="TemplateSettingsScreen" component={TemplateSettingsComponent} />
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
