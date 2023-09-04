import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 48,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: palette['gray-400'],
  },
  firstParagraph: {
    color: palette['gray-300'],
    marginTop: 16,
    fontWeight: 'bold',
  },
  secoundParagraph: {
    color: palette['gray-300'],
  }
});