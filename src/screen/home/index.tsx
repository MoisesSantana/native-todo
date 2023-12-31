import { Alert, FlatList, View } from 'react-native';
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
    const taskExists = todoList.some((item) => item.description === task.description);
    if (taskExists) {
      return Alert.alert(
        'Tarefa já cadastrada!',
        'Verifique se essa tarefa já existe na sua lista.'
      );
    }
    setTodoList((state) => [...state, task]);
  }

  function checkTask(description: string) {
    const newList = todoList.map((task) => {
      if (task.description === description) {
        task.finished = !task.finished;
      }
      return task;
    });
    setTodoList(newList);
  }

  function removeTask(description: string) {
    Alert.alert(
      'Remover item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            const newList = todoList.filter((task) => task.description !== description);
            setTodoList(newList);
            Alert.alert('Item removido com sucesso!');
          },
        }
      ]
    );
  }

  const totalTasks = todoList.length;
  const finishedTasks = todoList.reduce((total, task) => {
    if (task.finished) total++;
    return total;
  }, 0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Form addTask={addTask} />
        <TaskStatus totalTasks={totalTasks} finishedTasks={finishedTasks} />
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => <Task task={item} checkTask={checkTask} removeTask={removeTask} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}