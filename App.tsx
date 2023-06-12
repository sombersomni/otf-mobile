import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Typography, Spacings } from 'react-native-ui-lib'

import EventListScreen from './components/EventList';
import EventScreen from './components/screens/EventScreen';
import TemplateListScreen from './components/screens/TemplateListScreen';
import TemplateScreen from './components/screens/TemplateScreen';
import AddTemplateScreen from './components/screens/AddTemplateScreen';
import TemplateSettingsComponent from './components/screens/TemplateSettingsScreen';
import HomeScreen from './components/screens/HomeScreen';

// Theme Manager
Colors.loadColors({
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C'
});

// You can use font family to load a custom font
Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'}
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});

// Navigation
const Drawer = createDrawerNavigator();

function ScreenController() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ drawerLabel: 'Home', headerTitle: 'Home' }}
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
            <Stack.Screen name="Home" component={ScreenController} options={{ headerShown: false }} />
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
