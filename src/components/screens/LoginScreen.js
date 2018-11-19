import React, { Component } from 'react';
import { View, Text } from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> This is login Screen </Text>
        <Button bordered primary onPress={() => this.props.navigation.navigate('Access')}>
          Log In
        </Button>
      </View>
    );
  }
}

export default LoginScreen;
