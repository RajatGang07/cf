import { connect } from 'react-redux';
import Profile from "../../components/Profile";
import getUsers from '../../services/getUsers';
import { handleDeleteUser } from '../../store/actions/usersAction';
import getUserInfo from '../../services/getUserInfo';

const mapStatetoProps = state => ({
    ...state,
    user: state.user.user,
    loader: state.user.loading,
    userDetails: state.user.userDetails,
    error:state.user.error
}
);

const mapDispatchtoProps = (dispatch) => ({
    users: () => dispatch(getUsers()),
    deleteUser: (id, index) => dispatch(handleDeleteUser(id, index)),
    searchUserInfo: (userId) => dispatch(getUserInfo(userId))
})

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(Profile)

