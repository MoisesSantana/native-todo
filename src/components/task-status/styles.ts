import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  sides: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  left: {
    color: palette.blue,
    fontWeight: 'bold',
  },
  right: {
    color: palette.purple,
    fontWeight: 'bold',
  },
  numbersContainer: {
    backgroundColor: palette['gray-400'],
    borderRadius: 50,
    paddingVertical: 3,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbers: {
    color: palette['gray-200'],
    fontWeight: 'bold',
  }
});