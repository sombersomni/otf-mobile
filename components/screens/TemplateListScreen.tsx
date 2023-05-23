import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card, Chip, Divider, Text } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy data
import { templates } from '../../data/dummy';

function TemplateListScreen({ navigation }) {

  const handleAddTemplateScreenNavigation = () => {
    navigation.navigate('AddTemplateScreen')
  }

  const handleTemplateScreenNavigation = (id: number) => {
    navigation.navigate('TemplateScreen', {
      id
    })
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
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
      </View>
      <ScrollView>
        {templates.map(({ id, src, eventType, status }) => (
          <View key={id} style={styles.scrollContainer}>
            <TouchableOpacity onPress={() => handleTemplateScreenNavigation(id)}>
              <Card wrapperStyle={styles.imageCard}>
                <Card.Image source={{ uri: src }} resizeMode='contain' style={{ padding: 0, width: 200, height: 200 }} />
                <Card.Title h4>{eventType}</Card.Title>
                <Card.Divider />
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
