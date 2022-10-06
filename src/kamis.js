import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Kamis = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(0);

  const Hitung = () => {
    for (let i = 0; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
      setData(i);
    }
  };

  return (
    <View style={styles.content}>
      <Text>Case Kamis</Text>
      <TextInput
        style={styles.input}
        placeholder="Tulis angka..."
        value={number}
        onChangeText={value => setNumber(value)}
      />
      <Button title="Hitung" onPress={Hitung} />
      <Text>{data}</Text>
    </View>
  );
};

export default Kamis;

const styles = StyleSheet.create({
  content: {flex: 1, alignItems: 'center', justifyConent: 'center'},
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal: 10,
    width: 200,
    marginTop: 20,
  },
});
