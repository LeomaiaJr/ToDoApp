import {Flex, Button, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet} from 'react-native';

export type FiltersType = 'completed' | 'not_completed' | 'all';

interface FiltersProps {
  onFilter: (filter: FiltersType) => void;
  currentFilter: FiltersType;
}

const Filters = ({onFilter, currentFilter}: FiltersProps) => {
  return (
    <Flex style={styles.container}>
      <Text>Filters:</Text>
      <Flex style={styles.buttonContainer}>
        <Button
          variant={currentFilter === 'completed' ? 'contained' : 'outlined'}
          title="Completed"
          uppercase={false}
          color="green"
          onPress={() => onFilter('completed')}
        />
        <Button
          variant={currentFilter === 'not_completed' ? 'contained' : 'outlined'}
          title="Not completed"
          uppercase={false}
          color="red"
          onPress={() => onFilter('not_completed')}
        />
        <Button
          variant={currentFilter === 'all' ? 'contained' : 'outlined'}
          title="All"
          uppercase={false}
          color="blue"
          onPress={() => onFilter('all')}
        />
      </Flex>
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    textTransform: 'none',
  },
  completed: {
    borderColor: 'green',
    color: 'green',
  },
});

export default Filters;
