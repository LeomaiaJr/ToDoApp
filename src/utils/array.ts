import {TaskData} from '../Task';

export function findHighestId(array: TaskData[]) {
  return array.reduce((highest, task) => {
    return task.id > highest ? task.id : highest;
  }, 0);
}
