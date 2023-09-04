import { FlatList, View } from 'react-native';
import { Header } from '../../components/header';
import { TaskStatus } from '../../components/task-status';
import { Task } from '../../components/task';
import { styles } from './styles';
import { Form } from '../../components/form';
import { useState } from 'react';
import { Todo } from '../../@types';
import { EmptyList } from '../../components/empty-list';

export function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  function addTask(task: Todo) {
    setTodoList((state) => [...state, task]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Form addTask={addTask} />
        <TaskStatus />
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => <Task task={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}