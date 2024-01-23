import * as React from 'react';

import { StyleSheet, View } from 'react-native';

import { Button } from 'sidcn';

import { useColorScheme } from 'nativewind';
export default function App() {
  const { toggleColorScheme } = useColorScheme();
  return (
    <View style={styles.container} className="dark:bg-black flex flex-col">
      <Button
        variant="primary"
        className="px-8 my-6 text-[14px]"
        onPress={() => toggleColorScheme()}
      >
        Primary Button
      </Button>
      <Button
        variant="secondary"
        className="px-8 my-6 text-[14px]"
        onPress={() => toggleColorScheme()}
      >
        Secondary Button
      </Button>
      <Button
        variant="outline"
        className="px-8 my-6 text-[14px]"
        onPress={() => toggleColorScheme()}
      >
        Outline Button
      </Button>
      <Button
        variant="destructive"
        className="px-8 my-6 text-[14px]"
        onPress={() => toggleColorScheme()}
      >
        Destructive Button
      </Button>
      <Button
        variant="link"
        className="my-6 text-[14px]"
        onPress={() => toggleColorScheme()}
      >
        Link
      </Button>
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
