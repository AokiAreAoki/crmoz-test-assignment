import {useColorScheme} from 'react-native';

export default function useIsDarkMode() {
  return useColorScheme() === 'dark';
}
