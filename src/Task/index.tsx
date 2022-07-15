import CheckBox from '@react-native-community/checkbox';
import {Button, Flex} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface TaskData {
  id: number;
  title: string;
  isDone: boolean;
}

interface TaskProps {
  task: TaskData;
  onDelete: (task: TaskData) => void;
  onSelected: (task: TaskData, val: boolean) => void;
}

const Task = ({task, onDelete, onSelected}: TaskProps) => {
  return (
    <Flex style={styles.container}>
      <CheckBox
        value={task.isDone}
        onValueChange={() => {
          onSelected(task, !task.isDone);
        }}
        style={styles.checkbox}
      />
      <Text
        style={{
          ...styles.label,

          ...(task.isDone ? styles.doneLabel : {}),
        }}>
        {task.title}
      </Text>
      <Button
        title="X"
        onPress={() => {
          onDelete(task);
        }}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    width: 250,
    margin: 8,
  },
  doneLabel: {
    textDecorationLine: 'line-through',
  },
});

export default Task;
