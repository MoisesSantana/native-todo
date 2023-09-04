import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette['gray-600'],
  },
  body: {
    width: '100%',
    paddingHorizontal: 25,
  }
});