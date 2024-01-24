import { useColorScheme } from 'nativewind';
import * as React from 'react';

import { Image, StyleSheet, View } from 'react-native';

import { Button, Alert, AlertTitle, AlertDescription } from 'sidcn';

export default function App() {
  const { toggleColorScheme } = useColorScheme();
  return (
    <View className="h-full dark:bg-black">
      <Button
        className="my-10 w-1/6 ml-auto mr-10 mt-10 text-[12px]"
        onPress={() => toggleColorScheme()}
      >
        Toggle
      </Button>
      <View style={styles.container} className="px-4">
        <Alert variant="primary" className="my-1">
          <Image
            source={require('../assets/favicon.png')}
            className="w-10"
            style={{ width: 24, height: 24 }}
          />
          <AlertTitle>Alert Primary</AlertTitle>
          <AlertDescription>Alert Description</AlertDescription>
        </Alert>
        <Alert variant="secondary" className="my-1">
          <Image
            source={require('../assets/favicon.png')}
            className="w-10"
            style={{ width: 24, height: 24 }}
          />
          <AlertTitle>Alert Secondary</AlertTitle>
          <AlertDescription>Alert Description</AlertDescription>
        </Alert>
        <Alert variant="destructive" className="my-1">
          <Image
            source={require('../assets/favicon.png')}
            className="w-10"
            style={{ width: 24, height: 24 }}
          />
          <AlertTitle>Alert Destructive</AlertTitle>
          <AlertDescription>Alert Description</AlertDescription>
        </Alert>
        <Alert variant="outline" className="my-1">
          <Image
            source={require('../assets/favicon.png')}
            className="w-10"
            style={{ width: 24, height: 24 }}
          />
          <AlertTitle>Alert Outline</AlertTitle>
          <AlertDescription>Alert Description</AlertDescription>
        </Alert>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
