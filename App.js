import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ButtonComponent from './components/addBudgetButton';

const onPressLearnMore = () => {
  console.log("Hello world")
}

const App = () => {
  return (
    <View style={styles.renderPane}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Budget App!</Text>
      </View>
      <ButtonComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  renderPane: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    paddingLeft: 25,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: "#4d94ff"
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "justify"
  }
});

export default App;
