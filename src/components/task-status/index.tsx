import { Text, View } from 'react-native';
import { styles } from './styles';

export function TaskStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.sides}>
        <Text style={styles.left}>Criadas</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>300</Text>
        </View>
      </View>
      <View style={styles.sides}>
        <Text style={styles.right}>Concluídas</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>0</Text>
        </View>
      </View>
    </View>
  );
}