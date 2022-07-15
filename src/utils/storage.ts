import AsyncStorage from '@react-native-community/async-storage';
import {TaskData} from '../Task';

export const storeTasks = async (tasks: TaskData[]) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

export const retrieveTasks = async () => {
  try {
    const tasks = await AsyncStorage.getItem('tasks');
    return JSON.parse(tasks || '[]');
  } catch (error) {
    console.log(error);
  }
};
