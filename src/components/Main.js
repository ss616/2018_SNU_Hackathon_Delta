// Library Imports
import React, {Component} from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

// External Library Imports
import { connect } from 'react-redux';

// Local Imports
import Login from './screens/LoginScreen';
import Access from './screens/AccessGroupScreen';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator({
        // For each screen that you can navigate to, create a new entry like this:
        Access: {
          screen: AccessGroupScreen,
        },
        Home: {
            screen: HomeScreen,
        },
    },
    {
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: DrawerContent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
    });
    
// The Root of our Stack Navigation
const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Drawer: { 
    screen: Drawer
  },  
  Access: {
      screen: AccessGroupScreen
    },
    
    // Home: {
    //   screen: HomeScreen
    // },
    // Test: {
    //   screen: TestScreen
    // },
    // ItemDetail: {
    //   screen: ItemDetailScreen 
    // },
    // EQuoteList: {
    //   screen: EQuoteListScreen
    // }, 
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);


class Main extends Component {
  constructor() {
    super();
    this.state = {
      //loading: true,
    };

  }

  render() {

    console.log('MainRender');
    return <RootStack/>

    // // The application is initialising
    // if (this.state.loading) return null;

    // // The response is an Object, so they're logged in and posted
    // if (this.state.user){   
    //   return <RootStack/>
    // }

    // The user is null, so they're logged out
    // return <LoginScreen />
  }
}

const mapStateToProps = state => {
  console.log(state)
  return({
      response: state.auth.response,
      error: state.auth.error,
      loading: state.auth.loading,
      user: state.auth.user,
      company_name: state.auth.company_name,
      company_type: state.auth.company_type,
  });
}

export default connect(mapStateToProps, { postUser })(Main);