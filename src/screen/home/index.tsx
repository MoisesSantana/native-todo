import { View } from 'react-native';
import { Header } from '../../components/header';
import { TaskStatus } from '../../components/task-status';
import { Task } from '../../components/task';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskStatus />
      <Task />
    </View>
  );
}