import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

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

  
  render() {
    return (
      <View style={styles.container}>
        <Header title="To Do App" />
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    color: '#171717'
  }
});
