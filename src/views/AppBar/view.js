import React from 'react';
import { connect } from 'react-redux';
import * as status from '../../constants/fetchState.js';

// material-ui component
import { AppBar, IconButton, IconMenu, MenuItem, FlatButton} from 'material-ui';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';

const LoggedButton = () => (
    <IconMenu
        iconButtonElement={
            <IconButton><NavigationMoreVert/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        iconStyle={{
            color: "#fff"
        }}
    >
        <MenuItem primaryText="刷新"/>
        <MenuItem primaryText="登出"/>
    </IconMenu>
)
LoggedButton.muiName = 'IconMenu';

const LoginButton = () => (
    <FlatButton style={{
        color: "#fff",
        marginTop: "5px"
    }} label="登录" />
)
LoginButton.muiName = 'FlatButton';

class Header extends React.Component {

    render() {
        const isLogin = (this.props.status === status.SUCCESS && this.props.data !== undefined);

        return (
            <AppBar
                title='Hello'
                iconStyleRight={{
                    color: "#fff"
                }}
                iconElementRight={ isLogin ? <LoggedButton/> : <LoginButton/> }
            />
        )
    }
}

const mapStateToProps = (state) => (
    state.App.userinfo
)
export default connect(mapStateToProps)(Header);