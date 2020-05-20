import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import InputBar from './components/inputbar';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title:'Take out the trash', done: false },
        {id: 1, title:'Cook Dinner', done: false }
      ]
    }
  }

  addNewTodo() {
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length + 1,
      todo :this.state.todoInput,
      done: false

    });

    this.setState({
      todos,
      todoInput:''
    });
  }
  
  render() {
    const statusbar = <View style={styles.statusbar}></View>;
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="To Do List" />
        <InputBar 
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={()=>this.addNewTodo()}
        />
        <Text>{this.state.todoInput}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  statusbar: {
    height: 60,
    backgroundColor: '#FFCE00'
  }


});
