import { View } from 'react-native';
import { Header } from '../../components/header';
import { TaskStatus } from '../../components/task-status';
import { Task } from '../../components/task';
import { styles } from './styles';
import { Form } from '../../components/form';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Form />
        <TaskStatus />
        <Task />
      </View>
    </View>
  );
}