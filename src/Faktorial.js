import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Faktorial = () => {
  const [number, setNumber] = useState(0);
  const [data, setData] = useState(0);

  const Hitung = () => {
    let factorial = number;
    let factor = factorial - 1;
    for (let i = factor; i > 1; i--) {
      factorial = factorial * i;
      console.log(factorial);
    }
    setData(factorial);
  };

  return (
    <View style={styles.content}>
      <Text>Faktorial</Text>
      <TextInput
        style={styles.input}
        placeholder="Tulis angka faktorial..."
        value={number}
        onChangeText={value => setNumber(value)}
      />
      <Button title="Hitung" onPress={Hitung} />
      <Text>{data}</Text>
    </View>
  );
};
export default Faktorial;

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
