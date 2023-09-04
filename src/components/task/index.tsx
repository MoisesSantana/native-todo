import { Text, View } from 'react-native';
import { Todo } from '../../@types';

type TaskProps = {
  task: Todo;
}

export function Task({ task }: TaskProps) {
  return (
    <View>
      <Text>{ task.description }</Text>
    </View>
  );
}