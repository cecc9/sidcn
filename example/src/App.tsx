import { View, Text } from 'react-native';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from 'sidcn';
import { useColorScheme } from 'nativewind';

const App = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className=" flex-1 px-4 dark:bg-black">
      <Button className="w-20 ml-auto mt-16" onPress={() => toggleColorScheme()}>
        Toggle
      </Button>

      <View className="justify-center flex-1">
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        <Accordion>
          
          <AccordionItem>
            <AccordionTrigger>
              Open Accordion 1
            </AccordionTrigger>
            <AccordionContent>
              This is accordion detail
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionTrigger>
              Open Accordion 2
            </AccordionTrigger>
            <AccordionContent>
              This is accordion detail
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem>
            <AccordionTrigger>
              Open Accordion 2
            </AccordionTrigger>
            <AccordionContent>
              This is accordion detail
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
      </View>
    </View>
  );
};

export default App;
