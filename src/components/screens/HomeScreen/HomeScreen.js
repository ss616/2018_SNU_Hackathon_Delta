import React, { Component } from 'react';

import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";

// External Library imports
import { Container, Content, View, Card, Icon, Button} from 'native-base';

// Local Imports
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import { primaryColor } from '../../../settings';
import FeaturedView from './FeaturedView';
import viewSwitcher from './viewSwitcher';
// import FeaturedView from './FeaturedView';
// import RecommendedView from './RecommendedView';
// import CategoryView from './CategoryView';
// import PromoCard from './PromoCard';
// import PostNewFab from './PostNewFab';
import EQuoteCard from '../../reusables/EQuoteCard';

export default class HomeScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        header:null,
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
            <Image
                tintColor={tintColor}
                //source={require('../../../assets/DrawerIcons/logo.png')}
                style={styles.icon}
            />
        ),
    })

    render() {
        const type = this.props.navigation.getParam('type');

        console.log("HomeRender")
        return (
            <Container backgroundColor='white' >
                
                <HomeScreenHeader 
                    leftIconName='ios-menu'
                    onLeftButtonPress={() => this.props.navigation.openDrawer()}
                    searchPlaceholder={'What are you looking for?'}
                    color={primaryColor}
                />
                <Content contentContainerStyle={styles.container}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <ScrollView
                            vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                        </ScrollView>
                    </SafeAreaView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 0,
    },
});

