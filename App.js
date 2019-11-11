import React from 'react';
import { AppLoading, Constants } from 'expo';
import { StyleSheet, Platform } from 'react-native';
import { Container, Header, Content, Button,Body, Text, Card, CardItem } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header />
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered >
              <Text style={styles.textCenter}>Iniciar sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={styles.btnLogin}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center'
  },
  btnLogin: {
    width: '100%',
    justifyContent: 'center'
  }
});

export default App;
