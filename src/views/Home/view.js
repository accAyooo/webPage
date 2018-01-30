import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        console.log(this.props);
    }

    render() {
        return (
            <div onClick={this.clickHandler}>home</div>
        )
    }
}

const mapStateToProps = (state) => (state.App.userinfo);

export default connect(mapStateToProps)(Home);