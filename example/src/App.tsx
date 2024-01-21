import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button, AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogClose } from 'radiuskit';
export default function App() {
  return (
    <View style={styles.container}>
          
          
          
          
          
          
          
          
          
      <View>
        <AlertDialog>
          
          <AlertDialogTrigger>
            <Button variant="primary">Open Dialog</Button>
          </AlertDialogTrigger>
          
          
          <AlertDialogContent className='w-10/12'>

            <AlertDialogTitle className="text-[#fff]">Are you absolutely sure?</AlertDialogTitle>

            <AlertDialogDescription className="text-[12px]">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          
            <AlertDialogClose>
              <Button variant='secondary' className='px-8'>Close Modal</Button>
            </AlertDialogClose>
          
          </AlertDialogContent>
        </AlertDialog>
      </View>
          
          
          
          
          
          
          
          
          
          
          
          
          
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
