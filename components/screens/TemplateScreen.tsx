import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Chip, Divider, Text } from '@rneui/themed';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { templates } from '../../data/dummy';

export default function TemplateScreen({ route, navigation }) {
  const { id } = route.params;
  const { src, status } = templates.find(t => t.id === id);

  const handleTemplateSettingsScreenNavigation = () => {
    navigation.navigate("TemplateSettingsScreen")
  }
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text h3>Event Name</Text>
      <Image source={{ uri: src }} style={styles.photo} resizeMode="contain"/>
  
      <Divider />
      <View style={styles.info}>
        <View style={styles.infoLeft}>
          <Text>Next Scheduled Event:</Text>
          <Text>Jan 10, 2024</Text>
        </View>
        <View style={styles.infoRight}>
          <Chip
            size="sm"
            title={status}
            type="outline"
            containerStyle={{ marginVertical: 15 }}
          />
        </View>
      </View>
      <TouchableOpacity>
        <Button
          title="Template Settings"
          type="outline"
          onPress={handleTemplateSettingsScreenNavigation}
          icon={{
            name: 'gear',
            type: 'font-awesome',
            size: 20,
            color: '#cccccc',
          }}
          containerStyle={{ marginVertical: 15, marginBottom: 30 }}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  photo: {
    width: '100%',
    height: 500,
    resizeMode: 'center',
    marginBottom: 8,
  },
  author: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    width: '100%',
  },
  infoLeft: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  infoRight: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  }
});
