import { Text, View } from 'react-native';
import { styles } from './styles';

type TaskStatusProps = {
  totalTasks: number;
  finishedTasks: number;
};

export function TaskStatus({ totalTasks, finishedTasks }: TaskStatusProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sides}>
        <Text style={styles.left}>Criadas</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{totalTasks}</Text>
        </View>
      </View>
      <View style={styles.sides}>
        <Text style={styles.right}>Concluídas</Text>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbers}>{finishedTasks}</Text>
        </View>
      </View>
    </View>
  );
}