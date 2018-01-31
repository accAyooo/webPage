import React from 'react';
import * as actions from "./actions";
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";

class App extends React.Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(BaseTheme)}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => {
            dispatch(actions.fetchGetUserInfo());
        }
    }
}

export default connect(null, mapDispatchToProps)(App);