
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomIcon from './src/components/CustomIcon';


function App(): JSX.Element {


  return (
    <SafeAreaView>
      <CustomIcon name="search" size={25}/>
      <CustomIcon name="ticket" size={25}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
