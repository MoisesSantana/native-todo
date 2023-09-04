import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from '../../@types';
import { styles } from './styles';

type TaskProps = {
  task: Todo;
  checkTask: (description: string) => void;
  removeTask: (description: string) => void;
}

export function Task({ task, checkTask, removeTask }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.leftContent}
        onPress={() => checkTask(task.description)}
      >
        <View style={ task.finished ? styles.checked : styles.checkbox }>
          { task.finished && <Image source={require('../../../assets/Vector.png')} /> }
        </View>
        <Text style={ task.finished ? styles.checkedText : styles.text }>{ task.description }</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeTask(task.description)}
      >
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}