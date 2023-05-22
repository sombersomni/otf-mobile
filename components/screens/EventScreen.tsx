import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Chip, Text } from '@rneui/themed';

const post = {
  photo: 'https://cdn.nba.com/teams/legacy/www.nba.com/bulls/sites/bulls/files/gettyimages-1864269.jpg',
  caption: 'MJ with the slam dunk',
  author: 'John Doe',
  status: 'Complete'
};

export default function EventScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.photo }} style={styles.photo} />
      <Text h3>{post.caption}</Text>
      <Text style={styles.author}>Reviewed by {post.author}</Text>
      <Chip
            title={post.status}
            type="outline"
            icon={{
              name: 'check',
              type: 'font-awesome',
              size: 20,
              color: 'green',
            }}
            containerStyle={{ marginVertical: 15 }}
          />
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
