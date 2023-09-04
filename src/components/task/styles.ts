import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: palette['gray-500'],
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: palette['gray-400'],
    borderWidth: 2,
    borderColor: palette.blue,
    marginRight: 10,
  },
  checked: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: palette['purple-dark'],
    borderWidth: 2,
    borderColor: palette['purple-dark'],
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: palette['gray-100'],
  },
  checkedText: {
    color: palette['gray-300'],
    textDecorationLine: 'line-through',
  }
});