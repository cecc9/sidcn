//@ts-ignore
//import { useColorScheme } from '../../example/node_modules/nativewind'; //Development
import { useColorScheme } from '../../../nativewind';//Production

const colorTheme = () => {
  const { colorScheme } = useColorScheme();
  if (colorScheme == 'light') {
    return true;
  } else {
    return false;
  }
};

export default colorTheme;
