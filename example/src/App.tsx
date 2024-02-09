import { View, Text } from 'react-native';
import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
  Input,
} from 'sidcn';
import { useColorScheme } from 'nativewind';
import { ChevronsUpDownIcon } from 'lucide-react-native';

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className=" flex-1 px-4 dark:bg-black">
      <Button
        className="w-20 ml-auto mt-16"
        onPress={() => toggleColorScheme()}
      >
        Toggle
      </Button>

      <View className="justify-center flex-1">
        <Input placeholder="This is a placeholder" />
      </View>
    </View>
  );
};

export default App;
