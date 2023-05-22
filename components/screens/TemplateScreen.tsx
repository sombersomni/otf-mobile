import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Chip, Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

const post = {
  photo: 'https://cdn.nba.com/teams/legacy/www.nba.com/bulls/sites/bulls/files/gettyimages-1864269.jpg',
  caption: 'MJ with the slam dunk',
  author: 'John Doe',
  status: 'Complete'
};

export default function TemplateScreen() {
  return (
    <View style={styles.container}>
      <Text h3>Event Name</Text>
      <Image source={{ uri: post.photo }} style={styles.photo} />
      <TouchableOpacity>
        <Chip
              title="Template Settings"
              type="outline"
              icon={{
                name: 'gear',
                type: 'font-awesome',
                size: 20,
                color: '#cccccc',
              }}
              containerStyle={{ marginVertical: 15 }}
            />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
