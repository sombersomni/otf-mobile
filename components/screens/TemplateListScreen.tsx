import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card, Chip, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

const templates = [
  { id: 1, src: "https://i.ebayimg.com/images/g/2qIAAOSwgDFj6zme/s-l1600.jpg", eventType: "Game Score", status: "Active"},
  { id: 2, src: "https://i.ebayimg.com/images/g/izgAAOSwGJ1kEw7N/s-l1600.jpg", eventType: "MVP", status: "Inactive"},
  { id: 3, src: "https://m.media-amazon.com/images/I/714HVJ+rM5L._AC_SY679_.jpg", eventType: "Starting Five", status: "Active" }
];

function TemplateListScreen({ navigation }) {

  const handleAddTemplateScreenNavigation = () => {
    navigation.navigate('AddTemplateScreen')
  }

  const handleTemplateScreenNavigation = () => {
    navigation.navigate('TemplateScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.options}>
        <Button
          onPress={handleAddTemplateScreenNavigation}
          title="Add a New Template"
          buttonStyle={{
            borderColor: 'rgba(78, 116, 289, 1)',
          }}
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 15,
            color: 'rgba(0, 100, 200, 1)',
          }}
          size="sm"
          type="outline"
          raised
          titleStyle={{ color: 'rgba(0, 100, 200, 1)' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
      <ScrollView>
        {templates.map(({ id, src, eventType, status }) => (
          <View key={id} style={styles.scrollContainer}>
            <TouchableOpacity onPress={handleTemplateScreenNavigation}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
  },
  scrollContainer: {
    flex: 3,
    flexDirection: "column",
    padding: 10,
    alignItems: "center",
  },
  imageCard: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    alignItems: "center",
    width: 250
  },
  options: {
    justifyContent: "center",
    zIndex: 1,
  },
  statusActive: {
    color: "green",
  }
})

export default TemplateListScreen;
