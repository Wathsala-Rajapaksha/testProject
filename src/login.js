/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {fonts} from './Styles/fonts';

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passCode: ['', '', '', ''],
    };
  }

  _onPressNumber = num => {
    let tempPin = this.state.passCode;
    for (var i = 0; i < tempPin.length; i++) {
      if (tempPin[i] == '') {
        tempPin[i] = num;

        break;
      } else {
        continue;
      }
    }
    this.setState({passCode: tempPin});
  };

  _onPressCancel = () => {
    let tempPin = this.state.passCode;
    for (var i = tempPin.length - 1; i >= 0; i--) {
      if (tempPin[i] != '') {
        tempPin[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({passCode: tempPin});
  };

  render() {
    let pinNumbers = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 0},
    ];
    return (
      <View style={styles.contain}>
        <View>
          <Text style={styles.Text}>Enter Your Pin Code </Text>
        </View>
        <View style={styles.numberContainer}>
          {this.state.passCode.map(p => {
            let style = p != '' ? styles.pin2 : styles.pin1;
            return <View style={style}></View>;
          })}
        </View>

        <View style={styles.numContain}>
          {pinNumbers.map(num => {
            return (
              <TouchableOpacity onPress={() => this._onPressNumber(num.id)}>
                <View style={styles.number} key={num.id}>
                  <Text style={styles.numberText}>{num.id}</Text>
                </View>
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity onPress={() => this._onPressCancel()}>
            <View style={styles.delete}>
              <Text style={styles.numberText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#green',
    justifyContent: 'center',
    marginBottom: 60,
  },
  Text: {
    fontSize: 22,
    justifyContent: 'center',
    fontFamily: 'Roboto-Black',
    color: '#gray',
    marginTop: 140,
    marginBottom: 50,
    marginHorizontal: 82,
  },

  number: {
    margin: 7,
    width: 80,
    height: 80,
    borderRadius: 75,
    backgroundColor: '#5f9ea0',
    opacity: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberText: {
    fontSize: 20,
    fontFamily: 'Roboto-Black',
  },

  numContain: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 50,
    marginVertical: 50,
    width: 282,
    heigh: 348,
    alignItems: 'center',
    justifyContent: 'center',
  },

  delete: {
    backgroundColor: '#black',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: -10,
    marginLeft: 15,
  },

  numberContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 100,
    marginBottom: 50,
  },

  pin1: {
    marginStart: 20,
    width: 9,
    height: 9,
    borderRadius: 9,
    backgroundColor: '#dff0ea',
    margin: 8,
  },

  pin2: {
    marginStart: 20,
    width: 9,
    height: 9,
    borderRadius: 9,
    backgroundColor: '#4391d4',
    margin: 8,
  },
});
