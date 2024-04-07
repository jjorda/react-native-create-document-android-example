/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {writeFile} from '@dr.pogodin/react-native-fs';
import {createDocument} from 'react-native-create-document-android';

const FILE_CONTENT = 'some words in android file';

const callback = (uri: string) => {
  console.log('Saving file contazara into: ' + uri);
  writeFile(uri, FILE_CONTENT);
};

const testCreateDocument = () => {
  createDocument('test.txt', callback);
};

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Click here to save your file</Text>
      <Button title="save" onPress={testCreateDocument} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
