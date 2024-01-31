import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="Nota"
      />
     <TouchableOpacity style={styles.BotonTouch} onPress={addTask} >
        <Text>Agregar</Text> 
     </TouchableOpacity> 
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
              <Button title="Borrar" onPress={() => deleteTask(index)} color="red" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    borderRadius: 40,
    textAlign: 'center',
    alignItems: 'center'
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  BotonTouch: {
    height: 40,
    display:"flex",
    borderWidth: 1,
    borderColor: '#4cbd49',
    borderRadius: 40,
    textAlign: 'center',
    backgroundColor: '#4cbd49',
    alignItems: 'center',
    justifyContent:"center"
  },
});

export default App;
