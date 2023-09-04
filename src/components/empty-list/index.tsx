import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Clipboard.png')} />
      <Text style={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.secoundParagraph}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
