import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is the Welcome Screen!</Text>
      <Button
        onPress={() => navigation.navigate('Movies')}
        title="Go to movies"
      />
      <Button
        onPress={() => navigation.navigate('Weather Converter')}
        title="Weather Converter"
      />
      <Button
        onPress={() => navigation.navigate('My Movie Details')}
        title="My Movie Details"
      />
      <Button
        onPress={() => navigation.navigate('Image Gallary')}
        title="Image Gallery"
      />
    </View>
  );
}