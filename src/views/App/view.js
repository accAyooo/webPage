import React from 'react';
import { MuiThemeProvider } from 'material-ui';
import * as actions from "./actions";
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <MuiThemeProvider>
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