import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 25,
    marginTop: -25,
  },
  input: {
    flex: 1,
    backgroundColor: palette['gray-500'],
    color: palette['gray-100'],
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  btn: {
    width: 55,
    height: 55,
    borderRadius: 5,
    backgroundColor: palette['blue-dark'],
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});