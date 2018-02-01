import React from 'react';
import { connect } from 'react-redux';
import AppBar from "../AppBar/view";

class Home extends React.Component {

    render() {
        return (
            <div className="main">
                <AppBar/>
                <div>home</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.App.userinfo);

export default connect(mapStateToProps)(Home);