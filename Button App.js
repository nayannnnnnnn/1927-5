import React from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';

export default class HandlingTouchesComponent extends React.Component {
  _onPress() {
    fetch("https://bot3.seattleacademy.software/drive?left=200&right=200");
    console.log('forward');
}
  _onPress1() {
     fetch("https://bot3.seattleacademy.software/drive?left=-200&right=-200");
     console.log("backward")
  }

  _onPress2() {
    fetch("https://bot3.seattleacademy.software/drive?left=-100&right=100");
    console.log("left")
  }

  _onPress3() {
    fetch("https://bot3.seattleacademy.software/drive?left=100&right=-100");
    console.log("right!")
  }
    _onPress4() {
    fetch("https://bot3.seattleacademy.software/drive?left=0&right=0");
    console.log("stop!")
  }

  render() {
    return (
      <View style= {styles.container}>
        <View style= {styles.button}>
          <Button 
            title='Forwards' 
            onPress={this._onPress}  
          />
        </View>
        <View style= {styles.button}>
          <Button 
            title='Backwards' 
            onPress={this._onPress1}
          />
        </View>
        <View style= {styles.button}>
          <Button
            title='Left' 
            onPress={this._onPress2}
          />
        </View>
                <View style= {styles.button}>
          <Button
            title='Right' 
            onPress={this._onPress3}
          />
        </View>
                   <View style= {styles.button}>
          <Button
            title='Stop' 
            onPress={this._onPress4}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',

    },
    containerButton: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    button: {
      margin: 20
    }
});
