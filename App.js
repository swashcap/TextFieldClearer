import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {
      text: ''
    };

    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(text) {
    this.setState({ text })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput
          clearButtonMode='always'
          onChangeText={this.handleChangeText}
          style={styles.textInput}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  textInput: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    height: 44,
    padding: 8,
    width: '100%'
  }
});
