import {AppBar, Divider, Flex, Stack, Text} from '@react-native-material/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Filters, {FiltersType} from './Filters';
import NewTask from './NewTask';
import Task, {TaskData} from './Task';
import {findHighestId} from './utils/array';
import {retrieveTasks, storeTasks} from './utils/storage';

const MainPage = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [displayTasks, setDisplayTasks] = useState<TaskData[]>([]);

  const [currentFilter, setCurrentFilter] = useState<FiltersType>('all');

  const addTaskHandler = (title: string) => {
    setCurrentFilter('all');
    const newTask: TaskData = {
      title,
      id: findHighestId(tasks) + 1,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTaskHandler = (task: TaskData) => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
    if (newTasks.length === 0) {
      setCurrentFilter('all');
    }
  };

  const selectedTaskHandler = (task: TaskData, isDone: boolean) => {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return {...t, isDone};
        }

        return t;
      }),
    );
  };

  useEffect(() => {
    if (currentFilter === 'all') {
      setDisplayTasks(tasks);
    } else if (currentFilter === 'completed') {
      setDisplayTasks(tasks.filter(t => t.isDone));
    } else {
      setDisplayTasks(tasks.filter(t => !t.isDone));
    }
  }, [tasks, currentFilter]);

  useEffect(() => {
    console.log(32);
    retrieveTasks().then(storedTasks => {
      console.log(storedTasks);
      setTasks(storedTasks);
    });
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <Stack>
      <AppBar title="Todo App" />
      <NewTask onAdd={addTaskHandler} />
      <Divider />
      <Filters onFilter={setCurrentFilter} currentFilter={currentFilter} />
      <Divider />

      <Flex style={styles.taskContainer}>
        <Text style={styles.tasksLabel}>
          {displayTasks.length === 0 ? 'No tasks found.' : 'Tasks:'}
        </Text>
        {displayTasks.map(task => (
          <Flex key={task.id}>
            <Task
              task={task}
              onDelete={deleteTaskHandler}
              onSelected={selectedTaskHandler}
            />
            <Divider />
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#fff',
    paddingTop: 10,
    height: '100%',
  },
  tasksLabel: {
    paddingLeft: 10,
  },
});

export default MainPage;
