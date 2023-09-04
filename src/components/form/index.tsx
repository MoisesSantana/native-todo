import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../styles/theme';
import { useState } from 'react';
import { styles } from './styles';
import { Todo } from '../../@types';

type FormProps = {
  addTask: (task: Todo) => void;
};

export function Form({ addTask }: FormProps) {
  const [taskValue, setTaskValue] = useState('');

  function handleAddTask() {
    if (taskValue === '') return;

    const task = {
      description: taskValue,
      finished: false,
    };

    addTask(task);
    setTaskValue('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={ palette['gray-300'] }
        value={taskValue}
        onChangeText={setTaskValue}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={handleAddTask}
      >
        <Image source={require('../../../assets/icon/plus.png')} />
      </TouchableOpacity>
    </View>
  );
}