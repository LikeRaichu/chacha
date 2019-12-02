/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  Header,
  LearnMoreLinks,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from './StyleMan';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <View style={{height: 200, backgroundColor: "red"}}>
        <Text style={styles.forAla}>for 알라</Text>
      </View> */}
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨입숨
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
