import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { palette } from '../../styles/theme';
import { useState } from 'react';
import { styles } from './styles';

export function Form() {
  const [taskValue, setTaskValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor={ palette['gray-300'] }
        value={taskValue}
        onChangeText={setTaskValue}
      />
      <TouchableOpacity style={styles.btn}>
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  );
}