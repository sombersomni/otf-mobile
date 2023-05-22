import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Chip, Text } from '@rneui/themed';

const templates = [
  { id: 1, src: "https://i.ebayimg.com/images/g/2qIAAOSwgDFj6zme/s-l1600.jpg", eventType: "Game Score", status: "Active"},
  { id: 2, src: "https://i.ebayimg.com/images/g/izgAAOSwGJ1kEw7N/s-l1600.jpg", eventType: "MVP", status: "Inactive"},
  { id: 3, src: "https://m.media-amazon.com/images/I/714HVJ+rM5L._AC_SY679_.jpg", eventType: "Starting Five", status: "Active" }
];

function TemplateListScreen({ navigation }) {

  const handleNavigation = () => {
    navigation.navigate('TemplateScreen')
  }
  return (
    <ScrollView>
      {templates.map(({ id, src, eventType, status }) => (
        <View key={id} style={styles.container}>
          <TouchableOpacity onPress={handleNavigation}>
            <Card wrapperStyle={styles.imageCard}>
              <Card.Image source={{ uri: src }} style={{ padding: 0 }} />
              <Text h4>{eventType}</Text>
              <Chip
                  color={status === 'Active' ? 'success' : 'error'}
                  title={status}
                  type="outline"
                  containerStyle={{ marginVertical: 15 }}
                  size='sm'
                  />
            </Card>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    alignItems: "center"   
  },
  imageCard: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    alignItems: "center",
    width: 250
  },
  statusActive: {
    color: "green",
  }
})

export default TemplateListScreen;
