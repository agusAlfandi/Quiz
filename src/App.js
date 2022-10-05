import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const App = () => {
  const [name, setNama] = useState('');

  const [selected, setSelected] = useState('Role');

  const data = [
    {key: 'Penyihir', value: 'Penyihir'},
    {key: 'Guard', value: 'Guard'},
    {key: 'Werewolf', value: 'Werewolf'},
  ];

  const Send = () => {
    if (name === '') {
      Alert.alert('Warning', 'Please input your name');
    } else if (selected === '') {
      Alert.alert('Warning', 'Please select your role');
    } else if (name || selected) {
      Alert.alert('Success', 'well done, you can sign in now');
      const form = {
        name,
        selected,
      };
      console.log(form);
      setNama('');
      setSelected('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>World Game Werewolf</Text>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Name"
          onChangeText={value => setNama(value)}
        />
        <SelectList
          style={styles.dropdown}
          placeholder="Role"
          setSelected={setSelected}
          data={data}
          maxHeight={140}
          boxStyles={styles.dropdown}
          defaultOption={'Role'}

          // onSelect={() => alert(selected.value)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Login" onPress={Send} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {textAlign: 'center', padding: 20, fontSize: 20, fontWeight: 'bold'},
  container: {flex: 1, justifyContent: 'center'},
  content: {
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    width: 200,
    paddingHorizontal: 23,
    marginBottom: 20,
    fontSize: 15,
  },
  dropdown: {borderRadius: 10, width: 200},
  button: {marginHorizontal: 100, paddingTop: 20},
});
