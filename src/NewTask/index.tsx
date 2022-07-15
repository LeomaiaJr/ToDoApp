import {Button, Flex, TextInput} from '@react-native-material/core';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

interface NewTaskProps {
  onAdd: (title: string) => void;
}

const NewTask = ({onAdd}: NewTaskProps) => {
  const [title, setTitle] = useState('');

  return (
    <Flex style={styles.container}>
      <TextInput
        variant="outlined"
        label="New Task"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <Button
        title="Add"
        style={styles.button}
        onPress={() => {
          onAdd(title);
        }}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    margin: 16,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
  },
  button: {
    width: 100,
    marginBottom: 16,
  },
});

export default NewTask;
