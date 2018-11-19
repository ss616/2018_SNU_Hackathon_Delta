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
import { Container, Content } from 'native-base';

// Local Imports
import { primaryColor } from '../../../settings';
import HomeScreenHeader from './HomeScreenHeader';
import CategoryView from './CategoryView';
import EmployeeList from './EmployeeList';
import FeaturedView from './FeaturedView';
import viewSwitcher from './viewSwitcher';
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
        const type = this.props.navigation.getParam('type'); //gives type of user

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

