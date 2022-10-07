import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Jumat = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(0);
  const [minimal, setMinimal] = useState(0);

  const Hitung = () => {
    let max = 0;
    let min = Number.POSITIVE_INFINITY;
    for (let i = 0; i < number.length; i++) {
      max = Math.max(max, number[i]);
      min = Math.min(min, number[i]);
    }

    console.log(max);
    console.log(min);
    setData(max);
    setMinimal(min);
  };

  return (
    <View style={styles.content}>
      <Text>Case Jumat</Text>
      <TextInput
        style={styles.input}
        placeholder="Tulis angka..."
        value={number}
        onChangeText={value => setNumber(value)}
      />
      <Button title="Hitung" onPress={Hitung} />
      <Text>angka terbesar: {data}</Text>
      <Text>angka terkecil: {minimal}</Text>
    </View>
  );
};

export default Jumat;

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
