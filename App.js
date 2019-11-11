import React from 'react';
import { AppLoading, Constants } from 'expo';
import { StyleSheet, Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Content, Button, Body, CheckBox, Text, Thumbnail, ListItem, DatePicker, Card, CardItem, Item, Icon, Input } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

class Login extends React.Component {
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

  home = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered >
              <Text style={styles.textCenter}>Iniciar sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon active name='home'></Icon>
                  <Input placeholder='Nombre de usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon active name='lock'></Icon>
                  <Input placeholder='Contraseña de usuario' />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={styles.btnLogin} onPress={this.home}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
    this.stateDate = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
      ...MaterialIcons.fonr,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Content padder contentContainerStyle={styles.content}>
          <Card>
            <CardItem header bordered >
              <Text style={styles.textCenter}>Llena tus datos</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Thumbnail large source={require('./assets/images/logo.jpg')} />
                </Item>
                <Item inlineLabel>
                  <Icon active name='home'></Icon>
                  <Input placeholder='Nombre de usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon active name='lock'></Icon>
                  <Input placeholder='Apellido usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon active name='date'></Icon>
                  <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    style={styles.date}
                  />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={styles.btnLogin} onPress={() => alert("Mensaje de prueba")}><Text> Mensaje </Text></Button>
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
  },
  date: {
    width: '100%'
  }
});

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'BetterApp'
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  }
}, { headerLayoutPreset: 'center' });


export default createAppContainer(LoginNavigator);