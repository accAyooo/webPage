import React from 'react';
import * as actions from "./actions";
import { connect } from 'react-redux';
import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "./actionTypes";

class App extends React.Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        switch(this.props.App.userinfo.status) {
            case FETCH_START:
                return (
                    <h1>loading...</h1>
                );
            case FETCH_SUCCESS:
                return (
                    <div>
                        {this.props.children}
                    </div>
                );
            case FETCH_FAIL:
                return (
                    <div>
                        {this.props.App.userinfo.data}
                    </div>
                );
        }
    }
}
const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => {
            dispatch(actions.fetchGetUserInfo());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);