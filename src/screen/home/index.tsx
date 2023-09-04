import { View } from 'react-native';
import { Header } from '../../components/header';
import { TaskStatus } from '../../components/task-status';
import { Task } from '../../components/task';

export function Home() {
  return (
    <View>
      <Header />
      <TaskStatus />
      <Task />
    </View>
  );
}