import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import {FontAwesome} from "@expo/vector-icons"
import database from '../../config/firebaseconfig';
import styles from './style.js'

export default function Task({navigation}) {
  const [task, setTask] = useState([]);

  function deleteTask(id){
    database.collection('Tasks').doc(id).delete();
  }
  useEffect(() => {
    /**database.collection('Tasks').onSnapshot((query) =>{
      const list = [];
      query.forEach(doc => {
        list.push({...doc.data(), id: doc.id});
      });
      setTask(list);
    });**/
  },[]);

  return (
    <View style={styles.container}>
      <FlatList/>
      <TouchableOpacity style={styles.buttonNewTask}>
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}