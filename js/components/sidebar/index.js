
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Title ,Header, Body, Content, Text, List, ListItem, Icon, Container, Left, Right, Badge, Button, View, StyleProvider, getTheme, variables } from 'native-base';
import { Actions } from 'react-native-router-flux';

import material from '../../../native-base-theme/variables/material';
import { changePlatform, changeMaterial, closeDrawer } from '../../actions/drawer';
import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');

const drawerImage = require('../../../img/logo-kitchen-sink.png');

const datas = [
  {
    name: 'DO IT',
    route: 'filter',
    icon: 'ios-color-filter-outline',
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'IMPORTANT',
    route: 'folder',
    icon: 'ios-color-filter-outline',
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'SCHEDULED',
    route: 'folder',
    icon: 'ios-color-filter-outline',
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'REQUESTED',
    route: 'folder',
    icon: 'ios-color-filter-outline',
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'Folder 1',
    route: 'folder',
    icon: 'folder',
    bg: '#477EEA',
    types: '8',
  },
  {
    name: 'Folder 2',
    route: 'folder',
    icon: 'folder',
    bg: '#477EEA',
    types: '8',
  },
];

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
    themeState: React.PropTypes.string,
    changePlatform: React.PropTypes.func,
    changeMaterial: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container>

        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: '#fff', top: -1 }}
        >
        <Header>
          <Body>
            <Title>LanHelpdesk App</Title>
          </Body>
          <Right />
        </Header>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem button noBorder onPress={() => { Actions[data.route](); this.props.closeDrawer() }} >
                <Left>
                  <Icon active name={data.icon} style={{ color: '#777', fontSize: 26, width: 30 }} />
                  <Text style={styles.text}>{data.name}</Text>
                </Left>
                {(data.types) &&
                <Right style={{ flex: 1 }}>
                  <Badge
                    style={{ borderRadius: 3, height: 25, width: 25, backgroundColor: data.bg }}
                  >
                    <Text style={styles.badgeText}>{`${data.types}`}</Text>
                  </Badge>
                </Right>
                }
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
    closeDrawer: () => dispatch(closeDrawer()),
    changePlatform: () => dispatch(changePlatform()),
    changeMaterial: () => dispatch(changeMaterial()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(SideBar);
