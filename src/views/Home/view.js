import React from 'react';
import { connect } from 'react-redux';
import Header from "../Header/view";

class Home extends React.Component {

    render() {
        return (
            <div className="main">
                <Header/>
                <div>home</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (state.App.userinfo);

export default connect(mapStateToProps)(Home);